import {ChangeEvent, useState} from "react";

export default function (initialValue = "") {
    const [value, setValue] = useState(initialValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return {
        bind: {
            value,
            onChange: handleChange,
        },
        setValue
    }
}