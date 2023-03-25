import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsGiven, setAttemptsGiven] = useState<string>("");

    const attemptRequired = parseInt(attemptsGiven) || 0;

    return (
        <div>
            <h1>Give Attempts</h1>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Input:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsGiven}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsGiven(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() =>
                        setAttemptsLeft(attemptsLeft + attemptRequired)
                    }
                >
                    {" "}
                    gain{" "}
                </Button>
                <Button
                    onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                    disabled={attemptsLeft <= 0}
                >
                    {" "}
                    use{" "}
                </Button>
                <div> Attempts: {attemptsLeft} </div>
            </div>
        </div>
    );
}
