import Story from '../components/Story.js'
import view from '../utils/view.js'
export default async function Item() {
    const story = await getStory();
    console.log(story.comments);
    view.innerHTML = `<div>
    ${Story(story)}
    </div>
    <hr/>`
}

async function getStory() {
    const storyId = window.location.hash.split('?id=')[1];
    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
    const story = await response.json();
    return story;
}