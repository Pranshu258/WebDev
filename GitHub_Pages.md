[Previous: Introduction](HTML.md)

# GitHub Pages
Pranshu Gupta

## Git: A Version Control System
Git is a version control system used to track changes in files and coordinating work on those files among multiple people. It is built for speed, data integrity, and support for distributed, non-linear workflows. 

In order to keep track of the changes made, every time a developer modifies the project, he commits the changes and adds a descriptive message to the commit. If something is not right, the changes can be reverted by going back to a previous commit. 

A repository can have many branches, which may or may not be later merged with the development branch. This is useful in testing new ideas and features for the project, if a developer has some idea for a functionality to be added, he can create a new branch a write code and test the new feature. If all works well, this branch can be merged with the main branch.

Each developer works on his/her local copy of the project and changes are copied from the local to the relese branch by a process called merging. Merging may involve conflict resolution as well. Conflicts arise when two developers make diferent changes to the same line of code, then we have to decide which one to keep and which one to discard. 

Git is available freely under the GNU General Public License for Windows, Linux and MacOS. See the follwing article to learn how to install Git on our machine: [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Please see the document in the following link to learn about important Git commands: [Git CheatSheet](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf).


## GitHub Pages
GitHub is an online service which is built on top of Git. It allows teams of developers to work on the same project together, making their own changes in the repository and merging them time to time to a main release branch in a collaborative way. It is a great tool for Open Source Projects which are developed by thousands of developers from all over the world, e.g., Linux Kernel.

Here is a great introductory video of GitHub on YouTube, created by the GitHub team.

<iframe width="560" height="315" src="https://www.youtube.com/embed/w3jLJU7DT5E" frameborder="0" allowfullscreen></iframe>

We can also use to publish our websites via GitHub. Creating a repository named "yourusername.github.io" is all it takes. We add a HTML file "index.html" as the home page along with other pages as per our requirements. We make changes to website, commit the changes and push them to the remote which makes the changes visible on the actual website.

[GitHub Pages](https://pages.github.com/)



<!--[Next: JavaScript]()-->