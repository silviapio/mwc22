export const textInputsData = [
    {
        id: "name",
        type: "text",
        labelText: "Full name",
        placeholderText: "ex: Anna Martinez",
        messageText: "name can't be empty"
    },
    {
        id: "email",
        type: "text",
        labelText: "Email",
        placeholderText: "ex: youremail@gmail.com",
        messageText: "please enter a valid email",
        checkOnBlur: true
    },
    {
        id: "city",
        type: "text",
        labelText: "City",
        placeholderText: "ex: Barcelona"
    },
    {
        id: "country",
        type: "text",
        labelText: "Country",
        placeholderText: "ex: Spain",
        messageText: "country can't be empty"
    },
    {
        id: "description",
        type: "textarea",
        labelText: "Description",
        placeholderText: "ex: passionate front-end developer",
        messageText: "characters left",
        checkOnBlur: true
    }
];

export const radioInputData = {
    name: "gender",
    question: "Gender",
    options: [
        {
            id: "def",
            text: "Prefer not to say"
        },
        {
            id: "W",
            text: "Woman"
        },
        {
            id: "M",
            text: "Man"
        },
    ]
}