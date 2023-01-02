import { NextApiRequest, NextApiResponse } from "next";

/** Really basic back end handler for a form input. Includes some basic validation*/
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Only allow POST
    if(req.method === 'POST') {
        try {
            // Parse given input
            const data = JSON.parse(req.body);
            
            // Validate email
            const email: string | undefined = data['email'];
            if(typeof email !== 'string') return res.status(400).send("Email must be a string");
            if(email.length === 0) return res.status(400).send("Email must not be empty");
            
            // Validate radio input
            const radioValue: boolean | undefined = data['radioValue'];
            if(typeof radioValue !== 'boolean') return res.status(400).send("radioValue must be a boolean");

            // Logging is cool
            console.log("Email", email);
            console.log("radioValue", radioValue);

            // ok
            res.status(200).send('ok')
        } catch (e) {
            // Oops couldn't parse the input
            console.error(e);
            res.status(400).send('invalid argument');
        }
    } else {
        console.log(`form-submit was hit with ${req.method}`)
        res.status(405).send('method not allowed')
    }
}