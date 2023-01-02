export default function Contact() {
    return (<>
        <article>
            <h1>Contact (ish)</h1>
            <form method="post">
                <label htmlFor="form-email">Email: </label>
                <input type="email" id="form-email" name="email" placeholder="bob@bob.com"></input>
                <input type="radio" id="form-radio-yes" name="selection"></input>
                <label htmlFor="form-radio-yes">Yes</label>
                <input type="radio" id="form-radio-no" name="selection"></input>
                <label htmlFor="form-radio-yes">No</label>
                <br />
                <button>Submit</button>
            </form>
        </article>
    </>)
}