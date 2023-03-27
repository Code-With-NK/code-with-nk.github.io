let bgNum = 1
const container = document.querySelector('.project-container')

addProject('ludo', 'game')
addProject('memory-puzzle', 'game')
addProject('2048', 'game')
addProject('snake', 'game')
addProject('tetris', 'game')
addProject('connect-four', 'game')
addProject('crossword-puzzle', 'game')
addProject('color-picker', 'tool')

function addProject(repo, type) {
    const link = "https://code-with-nk.github.io/" + repo
    
    container.innerHTML += `
        <project href="" class="project-box all ${type}" data-repo="${link}">
                 <img src="/images/bg-${getBg()}.jpg" alt="">
                 <text>${repo.replace('-', ' ')}</text>
        </project>
    `
    
    document.querySelectorAll('.project-box').forEach((img) => {
        img.onclick = () => {
            location.assign(img.dataset.repo)
        }
    })
}

function getBg(){
    if(bgNum == 4){
        bgNum = 1
    } else {
        bgNum++
    }
    
    return bgNum
}

document.querySelectorAll('.list').forEach((item) => {
    item.onclick = () => {
        
        document.querySelectorAll('.project-filter li').forEach((icon) => {
            icon.classList.remove('project-filter-active')
        })
        item.classList.add('project-filter-active')
        
        const value = item.dataset.filter

        document.querySelectorAll('.project-box').forEach((project) => {
            if (!project.classList.contains(value)) {
                project.style.display = 'none'
            } else {
                project.style.display = 'block'
            }
        })
    }
})