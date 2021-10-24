const linkMediaSocial = {
    github: 'sergioalmeida00',
    youtube: 'maykbrito',
    instagram: 'sergio.almeidaa',
    facebook: '#',
    twitter: '#'
}

function changeLinkSocial() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');
        li.children[0].href = `https://${social}.com/${linkMediaSocial[social]}`
    }
}

changeLinkSocial();


function consumeApiGitUser() {
    const url = `https://api.github.com/users/${linkMediaSocial.github}`;
    fetch(url).then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}

consumeApiGitUser();