[Previous: Hyper Text Markup Language](HTML.md)

# GitHub Pages
Pranshu Gupta

## Git: A Version Control System
Git is a version control system used to track changes in files and coordinating work on those files among multiple people. It is built for speed, data integrity, and support for distributed, non-linear workflows. To add a project to git, go to the project folder and e issue the `git init` command. Then, add the files which you want to track with Git `git add fileName`, if you want to add all the files in the project folder use command `git add .`

    $ cd projectFolder
    $ git init
    $ git add .

In order to keep track of the changes made, every time a developer modifies the project, he commits the changes and adds a descriptive message to the commit. If something is not right, the changes can be reverted by going back to a previous commit. 

    $ git add changedFileName
    $ git commit -m "descritive message"

A repository can have many branches, which may or may not be later merged with the development branch. This is useful in testing new ideas and features for the project, if a developer has some idea for a functionality to be added, he can create a new branch a write code and test the new feature. If all works well, this branch can be merged with the main branch. To create a new branch of code and start working in that branch use the following commands:

    $ git branch newBranchName
    $ git checkout newBranchName

To go to work in the old branch, simply enter `git checkout oldBranchName`. For merging the current branch with another branch, use the following command, you might have resolve conflicts if you make different changes in the same line of code on the two branches. Conflict resolution has to be done manually by inspecting the code.

    $ git merge currentBranchName otherBranchName

Git is available freely under the GNU General Public License for Windows, Linux and MacOS. See the follwing article to learn how to install Git on your machine: [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). For Ubuntu Linux and Windows 10 with Bash the following commands work:

    $ sudo apt install git
    $ git config --global user.name "your name"
    $ git config --global user.email "your email"

[Git CheatSheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf).

## GitHub Pages
GitHub is an online service which is built on top of Git. It allows teams of developers to work on the same project together, making their own changes in the repository and merging them time to time to a main release branch in a collaborative way. It is a great tool for Open Source Projects which are developed by thousands of developers from all over the world, e.g., Linux Kernel.

Here is a great introductory video of GitHub on YouTube, created by the GitHub team.

<iframe width="560" height="315" style="margin-top:2%;margin-bottom:2%;" src="https://www.youtube.com/embed/w3jLJU7DT5E" frameborder="0" allowfullscreen></iframe>

We can also use to publish our websites via GitHub. Creating a repository named "yourusername.github.io" is all it takes. We add a HTML file "index.html" as the home page along with other pages as per our requirements. We make changes to website, commit the changes and push them to the remote which makes the changes visible on the actual website.

<iframe width="560" height="315" style="margin-top:2%;margin-bottom:2%;"  src="https://www.youtube.com/embed/2MsN8gpT6jY" frameborder="0" allowfullscreen></iframe>

[GitHub Pages](https://pages.github.com/)



<!--[Next: JavaScript]()-->