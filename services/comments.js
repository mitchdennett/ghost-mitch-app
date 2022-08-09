const db = require('./db');

const authors = [
    'Rob White',
    'Betty White',
    'Frank',
    'Bob McBobby'
]

const images = [
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80'
]

function all() {
  const data = db.query(`SELECT * FROM comments`, {});

  return {
    data
  }
}

function create(comment) {
    const author = authors[Math.floor(Math.random()*authors.length)];
    const image_url = images[Math.floor(Math.random()*images.length)];

    console.log(comment)

    const result = db.run('INSERT INTO comments (comment, image_url, author) VALUES (?, ?, ?)', [comment, image_url,  author]);

      
    let message = 'Error in runnning sql';
    if (result.changes) {
      message = 'Comment Created Succesfully';
    }
  
    return {message};
}

module.exports = {
  all, create
}