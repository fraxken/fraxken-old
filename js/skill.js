// Create a class for the element
class Skill extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        var shadow = this.attachShadow({mode: 'open'});
        var name = this.getAttribute("data-name");
        console.log(name);

        var section = document.createElement('section');
        section.className = "skill";
    
        var paragraph = document.createElement('p');
        paragraph.appendChild(document.createTextNode(name));
        section.appendChild(paragraph);
        shadow.appendChild(section);

    }
}

// Define the new element
customElements.define('skill-comp', Skill);
