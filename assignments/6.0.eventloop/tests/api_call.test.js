/**
You need to create the following tests
GET	/posts
GET	/posts/1
GET	/posts/1/comments
POST	/posts
PUT	/posts/1
DELETE	/posts/1

GET posts and populate them with comments and the post user
and return a users array with their posts and comments

expecting respnse that look liske { users: [{ ..., posts: [{ ... ,comments}]}] }

see https://mochajs.org/ for how mocha works
see
*/

// https://github.com/visionmedia/supertest
const supertest = require('supertest');
const {expect} = require('chai');

// see endpoint for api calls
const BASE_URL = 'https://jsonplaceholder.typicode.com'

const request = supertest(BASE_URL)

describe("Should handle errors", () => {

  it('should fail at getting pizza', done => {
    request.get(`/pizza`).expect(404, done)
  });

})

describe('Posts CRUD', () => {

  // GET	/posts
  it('should get all posts', done => {
    request.get(`/posts`).then(res => {
      expect(res.body).to.exist;
      expect(res.body.length).to.equal(100);

      done();
    });
  });

  // GET	/posts/1
  it('should get one post', done => {
    request.get(`/posts/1`).then(res => {
      expect(res.body).to.exist;
      expect(res.body.userId).to.equal(1);
      expect(res.body.id).to.equal(1);
      expect(res.body.title).to.equal('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');

      done();
    });
  });

  // GET	/posts/1/comments
  it('should get comments on post', done => {
    request.get(`/posts/1/comments`).then(res => {
      expect(res.body).to.exist;
      expect(res.body.length).to.equal(5);
      expect(res.body[0].email).to.equal('Eliseo@gardner.biz');

      done();
    });
  });

  // POST	/posts
  it('should post a post !', done => {
    request.post(`/posts`).send({"userId": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}).then(res => {
      expect(res.status).to.equal(201)
      expect(res.body.id).to.exist
      expect(res.body.id).to.equal(101)

      done();
    })
  });

  // PUT	/posts/1
  it('should update a post !', done => {

    request.put(`/posts/1`).send({userId: 1337, body: 'mock'}).then(res => {
      expect(res.status).to.equal(200);
      expect(res.body).to.exist;
      expect(res.body.userId).to.equal(1337);
      expect(res.body.body).to.equal('mock');

      done();
    })
  });

  // DELETE	/posts/1
  it('should delete a post !', done => {

    request.delete(`/posts/1`).send().then(res => {
      expect(res.status).to.equal(200);

      done();
    })
  });

});

describe("doing some promise examples", () => {
  it('should return a list of posts with their comments', function(done) {
    this.timeout(10000)
    request.get(`/posts`).then(res => {
      let posts = res.body
      // use with an array composed of a single post to make tracing easier
      // let posts_comments_promise = getPostsWithComments([posts[0]])
      let posts_comments_promise = getPostsWithComments(posts)

      posts_comments_promise.then(posts => {
        done()
      }).catch(err => console.log(err))

    })
  })
})

// using console.log helps mapping what is happening with you async code
function getPostsWithComments(posts) {
  return Promise.all(posts.map(post => {
    return request.get(`/posts/${post.id}/comments`).then(res => {
      let comments = res.body
      return Object.assign({}, post, {comments: comments})
    })
  }))
}
