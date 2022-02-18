import express, { Request, Response } from 'express'
import path from "path";
const PORT = process.env.PORT || 5000;
import { clanServerRequest } from '../src/api-server/request'
import { IClans, IFilterClan } from '../src/interfaces/IClans'
const app = express();

export interface IResponseClash<P> {
    items: P,
    pagin?: {}
}

app.use(express.json());
// Serve the React static files after build
app.use(express.static("./client/dist"));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api/clans", async (req: Request<{}, {}, {}, IFilterClan>, res: Response<IResponseClash<IClans[]>>) => {
    const { name } = req.query
    if (!name) {
        return res.send({ items: [] })
    }
    const { data, success, status } = await clanServerRequest.getClans(req.query)
    console.log(data)
    if (success && data.items) {
        return res.send(data)
    }
    return res.send({ items: []})
});

// All other unmatched requests will return the React app
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});