
const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    }, 
    {
        username: 'Jim',
        title: 'Post 2'
    }
]

export const getPosts = (req, res) => {
    res.json(posts);
};