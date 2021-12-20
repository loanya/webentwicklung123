import {useState} from "react";
import "./Login.css";
import Api from "../../services/Api";


const LabeledInput = ({
                          label,
                          type,
                          value,
                          setValue,
                      }: {
    label: string;
    type: string;
    value: string;
    setValue: (newValue: string) => void;
}) => {
    return (
        <label>
            {label}:
            <input
                type={type}
                required
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        </label>
    );
};

const Login = ({onLogin}: { onLogin: () => void }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasLoginError, setHasLoginError] = useState(false);

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();
        Api.login(email, password).then((wasSuccessFull) => {
            if (wasSuccessFull) {
                onLogin();
            }
            setHasLoginError(!wasSuccessFull);
        });
    };

    return (
        <div>
            <div className={"c_index"}>
                <form onSubmit={submitForm}>
                    <div className={`error ${!hasLoginError && "hidden"}`}>
                        Login fehlgeschlagen. Bitte versuchen Sie es erneut
                    </div>
                    <div>
                        <label id="h1_navBar" form="anmelden">Hier anmelden oder registrieren</label>
                    </div>
                    <div>
                        <LabeledInput
                            label="E-Mail"
                            type="text"
                            value={email}
                            setValue={setEmail}
                        />
                        <LabeledInput
                            label="Passwort"
                            type="password"
                            value={password}
                            setValue={setPassword}
                        />
                    </div>
                    <button type="submit">Einloggen</button>
                </form>
            </div>
        </div>
    );
};

export default Login;