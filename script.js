let bgNum = 1
const container = document.querySelector('.project-container')

addProject('ludo')
addProject('memory-puzzle')
addProject('2048')
addProject('snake')
addProject('tetris')
addProject('connect-four')
addProject('crossword-puzzle')
addProject('color-picker')

document.querySelectorAll('.list').forEach((item) => {
    item.onclick = () => {
        const value = item.dataset.filter
        
        document.querySelectorAll('.project-box').forEach((project) => {
            if (!project.classList.contains(value)) {
                project.style.opacity = 0
            } else {
                project.style.opacity = 1
            }
        })
    }
})

function addProject(repo) {
    const link = "https://code-with-nk.github.io/" + repo
    
    container.innerHTML += `
        <project href="" class="project-box web all" data-repo="${link}">
                 <img src="/images/bg-${getBg()}.jpg" alt="">
                 <text>${repo}</text>
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

document.querySelectorAll('.project-filter li').forEach((icon) => {
    icon.onclick = () => {
        document.querySelectorAll('.project-filter li').forEach((icon) => {
            icon.classList.remove('project-filter-active')
        })
        icon.classList.add('project-filter-active')
    }
})
