import express from "express";
import programController from "../controllers/program.controller";
import { ProgramNS } from "../types";
import { APIResponse } from "../classes";

const router = express.Router();

router.post('/addProgram', async (req: express.Request, res: express.Response) => {
    const program = req.body as ProgramNS.Program;
    try {
        const addProgram = await programController.addProgram(program);
        return res.status(addProgram.status).send(addProgram);
    } catch (error) {
        console.error(error);
        return res.status(500).send(new APIResponse(500, 'Internal Server Error', {}))
    }
})

export default router;