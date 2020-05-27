

console.log('before');
    getUser('bashiru', (user) => {
        console.log('candidate: ', user.fullname);
        getResults(user.fullname, (results) => {
            console.log('results: ',results);     
    });
       
    });
    report();
console.log('after');



function getUser (name, callback) {
    setTimeout(() => {
        console.log('getting a user from the database');
        callback ({name:name, fullname:'bashiru bukari'});

    },6000);

}

function getResults (results, callback) {
    setTimeout(()=> {
        console.log('fetching results from mongodb...')
        callback({matlab:100, matematik:99, english:100, chemistry:95});
    },1000);
}
function report () {
    console.log('your results is out');
}



// console.log('before');

// getUser(1,getRepositories)
// console.log('after');
// function displayCommits (commits) {
//     console.log(commits);
// }

// function getCommits (repos) {
// getCommits(repos, displayCommits);
// }

// function getRepositories (user) {
//     getRepositories(user.name, getCommits);
// }
// function getUser (id, callback) {
//     setTimeout(() => {
//         console.log('connecting a user to the database...')
//         callback ({id:id, name: 'bash'});
//     },2000)

// }

// function getRepositories (username,callback ) {
// setTimeout(() => {
//     console.log('getting repo api....')
//     callback( ['repo1','repo2','repo3']);
// },200)
// }