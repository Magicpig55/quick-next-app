import { NextApiRequest, NextApiResponse } from "next";

/** Really basic back end handler for a form input. Includes some basic validation*/
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST') {
        try {
            const data = JSON.parse(req.body);
            
            const email: string | undefined = data['email'];
            if(typeof email !== 'string') return res.status(400).send("Email must be a string");
            if(email.length === 0) return res.status(400).send("Email must not be empty");
            
            const radioValue: boolean | undefined = data['radioValue'];
            if(typeof radioValue !== 'boolean') return res.status(400).send("radioValue must be a boolean");

            console.log("Email", email);
            console.log("radioValue", radioValue);

            res.status(200).send('ok')
        } catch (e) {
            console.error(e);
            res.status(400).send('invalid argument');
        }
    } else {
        console.log(`form-submit was hit with ${req.method}`)
        res.status(405).send('method not allowed')
    }
}