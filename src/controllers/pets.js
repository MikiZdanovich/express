let pets = [
    {"dog": 1}
]


export const getPets = (req, res) => {
    res.status(200).json(pets)
}