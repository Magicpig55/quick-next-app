import { FormEventHandler, useState } from "react";

export default function Contact() {

    /** Form data! libraries would be cool, but pure react works just fine */
    const [email, setEmail] = useState('');
    const [radioValue, setRadioValue] = useState(false);
    const [serverResult, setServerResult] = useState<null | string>(null);
    
    /** Handles form submission */
    const handleForm: FormEventHandler = async (ev) => {
        ev.preventDefault() // Disable default behaviour, though it's set up correctly. We aren't returning anything helpful
        
        // Make data
        const data = JSON.stringify({email, radioValue});

        // Submit
        const res = await (await fetch('/api/form-submit', {method: "POST", body: data})).text();

        // Cool, don't care about the response so let's just display it
        console.log(`Server returned a response: ${res}`);
        setServerResult(res);

        //* Disabling this for now, not sure about two-way binding with radio buttons atm
        // setEmail("");
        // setRadioValue(false)
    }

    function ServerResult() {
        // Display the result somehow
        if(serverResult) return (<div>{serverResult}</div>)
        else return (<></>);
    }
    
    return (<>
        <article>
            <h1>Contact (ish)</h1>
            <form method="post" action="/api/form-submit" onSubmit={handleForm}>
                <label htmlFor="form-email">Email: </label>
                <input type="email" id="form-email" name="email" value={email} placeholder="bob@bob.com" onChange={(ev) => setEmail(ev.target.value)}></input>
                <input type="radio" id="form-radio-yes" name="selection" value="true" onChange={() => setRadioValue(true)}></input>
                <label htmlFor="form-radio-yes">Yes</label>
                <input type="radio" id="form-radio-no" name="selection" value="false" onChange={() => setRadioValue(false)}></input>
                <label htmlFor="form-radio-yes">No</label>
                <br />
                <button>Submit</button>
            </form>
            <ServerResult></ServerResult>
        </article>
    </>)
}