function formatMessage(template, name, ...skills) {
    const skillSet = [...skills].join(", ");         // join() -> converts the array into string
    console.log(skillSet[2, 6])
    const message = template
                    .replace("{name}", name)
                    .replace("{skill}", skillSet);

    return message;
}

const result = formatMessage("Hello {name}!, your skills: {skill}.", "Rudhra", "JavaScript", "Vue.js", "Java");
console.log(result); // Hello Rudhra!, your skills: JavaScript, Vue.js, Java.