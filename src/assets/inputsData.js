export const textInputsData = [
    {
        id: "name",
        type: "text",
        labelText: "Full name *",
        placeholderText: "ex: Anna Martinez",
        messageText: "name can't be empty"
    },
    {
        id: "email",
        type: "text",
        labelText: "Email *",
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
        labelText: "Country *",
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

export const radioGenderData = {
    name: "gender",
    question: "Gender:",
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
};

export const radioFieldData = {
    name: "field",
    question: "Field of expertise:",
    options: [
        {
            id: "def",
            text: "Front End"
        },
        {
            id: "BE",
            text: "Back End"
        },
        {
            id: "data",
            text: "Data"
        },
        {
            id: "mob",
            text: "Mobile"
        }
    ]
};

export const radioYearsData = {
    name: "yearsExp",
    question: "Years of experience:",
    options: [
        {
            id: "def",
            text: "0-2"
        },
        {
            id: "mid",
            text: "2-5"
        },
        {
            id: "exp",
            text: "5-10"
        },
        {
            id: "exp+",
            text: "10+"
        }
    ]
}

export const profileDescriptionText = [
    {
        key: "name",
        text: "Your name:"
    }, 
    {
        key: "email",
        text: "Your email:"
    },
    {
        key: "city",
        text: "Your city:"
    },
    {
        key: "country",
        text: "Your country:"
    },
    {
        key: "description",
        text: "Some words to describe yourself:"
    },
    {
        key: "gender",
        text: "You identified as:"
    },
    {
        key: "field",
        text: "Your field of expertise:"
    },
    {
        key: "yearsExp",
        text: "You have this many years of experience:"
    },
    {
        key: "skills",
        text: "Your skills:"
    }
]