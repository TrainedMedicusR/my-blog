const ghpages = require('gh-pages');

ghpages.publish(
  'public',
  {
    branch: 'main',
    repo: 'https://github.com/TrainedMedicusR/my-blog.git',
  },
  () => {
    console.log('Deploy Complete!');
  }
);