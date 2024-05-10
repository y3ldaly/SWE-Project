import './Form.css';

function Form(props) {
    // Function to handle click on an option
    function handleOptionClick(event) {
        // Prevent the default link behavior
        event.preventDefault();

        // Get the text content of the clicked option
        const newText = event.target.textContent;

        // Set the text content of the button to the clicked option's text content
        document.getElementById('button-title').textContent = newText;
    }

    return (
        <>
            
            <div class="container">
                <form id="message-form">
                <p id="form-caption">{props.caption}</p>
                    <textarea id="message-input" class="input-text" placeholder="Type your message..."/><br /><br />
                    <button type="submit" class="submit-button">Submit</button>
                </form>
            </div>
            <div className="dropdown">
                <button id="button-title">{props.title}</button>
                <div className="content">
                    <a href="" onClick={handleOptionClick}>{props.option1}</a>
                    <a href="" onClick={handleOptionClick}>{props.option2}</a>
                    <a href="" onClick={handleOptionClick}>{props.option3}</a>
                </div>
            </div>
        </>
        
    );
}

export default Form;
