import { FormEventHandler, useState } from "react";

export default function Contact() {

    
    const [email, setEmail] = useState('');
    const [radioValue, setRadioValue] = useState(false);
    const [serverResult, setServerResult] = useState<null | string>(null);
    
    const handleForm: FormEventHandler = async (ev) => {
        ev.preventDefault()
        const data = JSON.stringify({email, radioValue});
        const res = await (await fetch('/api/form-submit', {method: "POST", body: data})).text();
        console.log(`Server returned a response: ${res}`);
        setServerResult(res);
        //* Disabling this for now, not sure about two-way binding with radio buttons atm
        // setEmail("");
        // setRadioValue(false)
    }

    function ServerResult() {
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