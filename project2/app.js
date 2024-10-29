let data = [
    {
        name: "Mai",
        age: "23",
    },
    {
        name: "Mason",
        age: "29",
    },    {
        name: "Mariah",
        age: "42",
    },    {
        name: "Max",
        age: "19",
    },    {
        name: "Michelle",
        age: "68",
    },    {
        name: "Megan",
        age: "35",
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return (
        '<div>' + item.name + ' is ' + item.age + ' years old.' + '</div>'
    )
});

info.innerHTML = details.join('\n');