import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // State
    const [input, setInput] = useState<string>("");
    // Control
    function updateInput(event: ChangeEvent) {
        setInput(event.target.value);
    }
    // View
    return (
        <div>
            <h1>Check Answer</h1>
            <Form.Group controlId="formInputAnswer">
                <Form.Label>Input:</Form.Label>
                <Form.Control value={input} onChange={updateInput} />
            </Form.Group>
            <div>
                {/* The input is {}. The expected answer is {} */}
                {input === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
            </div>
        </div>
    );
}
