<h1 align="center">Island Of Taniti - D479 WGU</h1>

<h1 align="center">To-Do List</h1>

- **Project Scope**
    - [x] Create a **timeline** for how long it would take to deliver parts of the project (research, personas, wireframes, prototypes, and minimum viable product / MVP)
      - At this step we can see if we can incorporate a current **brand Identity** or create a new one from scratch.
    - [x] Create a **reference/inspo board.** Include researched competitors, design systems that make sense for the brand, etc.
    - [x] Create **personas** for the target audiences that will use the product or need to be aware of the brand.
    - [x] We can then take the **writen content** and images/assets we have (Or brain storm what important, useful or fun information would be best to include in the design), and the personas we wrote and incorporate them into the next part of the pipeline.
      - [x] Decide if we are going to make different pages for different parts of the content (Home [Persona1] [Persona2] FAQ [Product Explanation] [Product Display/Showcase]) These could all be different pages providing more information to things in the landing page. Or a single page application approach.

- **Make a Design**
    - [x] Create a simple site map (Where do we start, where can we go?). This is were we can visualize a multipage application vs a single page one (re-render or anchored). 
    - [x] Make a quick sketch in Excalidraw, Canva, Photoshop or figma using simple shapes (Take containers and sections into account).
    - [x] Make a **low fidelity wireframe** that gives us an guide of the layout, images and possible text layout and sizes.
    - [x] Refine the low fidelity wireframe by creating a **mid fidelity wireframe** that integrates custom components/cards and designated sections (hero/landing page, social proof, reviews, cards/collections, explainers, call to actions).
    - [x] Create a **Design System** and then polish the design into a **High Fidelity wireframe.** We pick the colors using the 60% 30% 10% rule and take contrast into account for accents impacting pseudo elements (link, hover, visited, etc). Semantic elements can be implemented in notifications.
      - We iterate positioning, typography, negative space, composition, depth/parralax/layers
    - [x] Create an interactive prototype using figma (which requires creating master components, instances of master, variants for pseudo interactions, and navigational logic when clicking as well as possible animations)


- [ ] **Set up Boilerplate & Scaffolding (Git Clone or push existing code "git init")**
    <details>
      <summary><strong>If we Git Clone (Fresh repo for a new project)</strong><span style="color: green; font-weight:bold;"> Click To Expand!</span></summary>
    <ul>
    <li>we can git clone the repo into our desired folder (this makes a new folder and git inits the repo code)</li>
    <li>It doesn't need any particular set up outside of the gh-pages branch.</li>
- [ ] **Create The Inital Project Files With a Bundler (VITE)**
    - [ ] run the command "npm create vite@latest ./" to make all the files in the git folder we are working on (or run npm install to download the needed files from our package.json file)
      - We can choose to create a Javascript or React project. I'm currently creating a vanilla JavaScript project and down the line converting sections and elements into React components with JSX.
      - If you want to be more direct you can use:
        - "npm create vite@latest my-js-app -- --template vanilla"
        - "npm create vite@latest my-react-app -- --template react"
        - "npm create vite@latest my-react-ts-app -- --template react-ts"
    </ul>
    </details>

    <hr style="margin: 4px;">

    <details>
      <summary><strong>If we Git Init (uploading WIP or old project into a new repo)</strong><span style="color: green; font-weight:bold;"> Click To Expand!</span></summary>
    <ul>
    <li>We can git init (to start git versioning on that specific folder)</li>
    <li>We need to add a .gitignore file and add the common files and folders</li>
    <li>We can create it using the "touch .gitignore command" (touch filename.filetype[index, css, jsx, etc])</li>
    
    ```text
    # logs
    logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    pnpm-debug.log*
    lerna-debug.log*

    node_modules
    dist
    dist-ssr
    *.local

    # Editor directories and files
    .vscode/*
    !.vscode/extensions.json
    .idea
    .DS_Store
    *.suo
    *.ntvs*
    *.njsproj
    *.sln
    *.sw?
    ```
    <li>git add . or * (To start staging files for the repo) And if we accidentally added something that is not supposed to go to the repo we can use "git rm -r --cached ." or delete the .git file if we put it in the wrong place</li>
    <li>git commit -m "Initial commit"</li>
    <li>git branch -M main (this changes the default name of the branch "Master" to main)</li>
    <li>git remote add origin git@github.com:username/repository.git (git repo link)</li>
    <li>At this point we are going to get an error because we haven't fethed the remote commits. So we need to use the command <strong>"git pull --rebase origin main"</strong></li>
    <li>To confirm the commit history we can use the command <strong>"git log > commit_history.txt"</strong> and check out the history (If this doesn't work we can force a commit but it will undo the git history which is not good practice)</li>
    <li>git push -u origin main (the -u links the local repo to the remote when pushing changes)</li>
    </ul>
    </details>

- [ ] **Set Up Develop Branch So We Can Make Changes Without Worrying About Main**
  - We can use git branch develop
  - Then use git checkout develop to switch over to that branch
  - When making changes we want to merge the develop branch to main and then also to gh-pages
    - Using the general **git** **workflow**:
      - git status
      - git add |Files...| or * (all)
      - git status again to double check staging
      - git commit -m "A message that describes the changes/additions"
      - git push to the remote repo 

- [ ] **Set Up gh-pages Branch To Isolate The dist Files**
    - After making sure that the gh-pages branch is up to date we can run the bundler to get a dist folder
    - which is npm installed correctly should be "npm run build" giving all our files default names according to the vite config.
    - You can always preview what the dist folder looks like using the vite command "npm run preview"
    - Then we can | git add dist -f && git commit -m "Deployment commit" |
    - git subtree push --prefix dist origin gh-pages (Push olnly the commits from the dist folder into the branch)
      - If the one above doesn't work then we kind of need to reset the gh-pages branch using "git push origin `git subtree split --prefix dist main`:gh-pages --force"
      - or "git push origin --delete gh-pages" (to delete the branch) then "git subtree push --prefix dist origin gh-pages" again to rebuild it
    - git checkout develop (go back to our development environment)

- **Analyzing The Figma Designs & Building The Project:**
    - [ ] Download all asset images used in the design.
    - [ ] Collect all of the design system colors, spacing, font families & sizes, semantic colors/toasts, badges, icons and if possible add them to the Read Me so It's easier to copy and pase in the same location. (the snip tool "SHIFT + WINDOWS KEY + S" has a built in color picker to get the hexadecimal value of a color on screen if we don't have a value for a color)
    - [ ] Reset the CSS to make the design cross compatible between browsers and also easier to work with and also include any variables if needed
      - Reset The CSS default properties with "box-sizing: border-box;", and adding "margin: 0;" & "padding: 0;"
      - Make Variables of anything that will be re-used in the design, custom uility classes (think tailwind) and or semantic rules and sizes we are going to use for colors, fonts, etc. 
    - [ ] Create the HTML components to outline the nested elements and build up the sections according to the design. (nav, containers, sections, forms, cards, & footer) 
      - We can work on our website with hot reload using vite running the command "npm run dev"
      - We can bundle our website with the vite command "npm run build"
      - And preview the bundled website with "npm run preview"
      - [ ] Break down a design into layout sections and components. (we can iterate faster in sites like codepen to not see as much clutter code)
      - [ ] Organize and comment out the  site sections and components in HTML
      - [ ] Plan and execute how CSS FlexBox and CSS Grid will take up space in the containers we defined and how we can position them to fit the design. (we can visualize the layout by using temporary boxes and lorem ipsum text that take out the space of the HTML elements).
      - [ ] Give them the proper properties (color, texture, font, alignment, borders/corners, spacing, background, opacity, shadows, Form inputs and semantic colors, images, links buttons, etc).
    - [ ] Fill the HTML layout sections & components with the downloaded images, brand assets, icons, etc.
- **END**
---
 
<h1 align="center">Design System</h1>

- **Colors (From Brightest to Darkest):**
  - Neutral Scale (Black and White):
    - Tone Value 1 `#f0f1f1` <span style="color:#f0f1f1">Example</span>.
    - Tone Value 2 `#d5d5d8` <span style="color:#d5d5d8">Example</span>.
    - Tone Value 3 `#adaeb3` <span style="color:#adaeb3">Example</span>.
    - Tone Value 4 `#87888f` <span style="color:#87888f">Example</span>.
    - Tone Value 5 `#63646c` <span style="color:#63646c">Example</span>.
    - Tone Value 6 `#424248` <span style="color:#424248">Example</span>.
    - Tone Value 7 `#232327` <span style="color:#232327">Example</span>.
  <br>
  - Brand Colors:
    - Main Brand color 1 `#eef0fd` <span style="color:#eef0fd">Example</span>.
    - Main Brand color 2 `#cdd4f9` <span style="color:#cdd4f9">Example</span>.
    - Main Brand color 3 `#9aaaf4` <span style="color:#9aaaf4">Example</span>.
    - Main Brand color 4 `#6182EE` <span style="color:#6182EE">Example</span>.
    - Main Brand color 5 `#2f5dcc` <span style="color:#2f5dcc">Example</span>.
    - Main Brand color 6 `#1d3d8c` <span style="color:#1d3d8c">Example</span>.
    - Main Brand color 7 `#0c2050` <span style="color:#0c2050">Example</span>.
  <br>
    - Complementary Contrast to Main Color 1 `#fcf0d4` <span style="color:#fcf0d4">Example</span>.
    - Complementary Contrast to Main Color 2 `#EECD61` <span style="color:#EECD61">Example</span>.
    - Complementary Contrast to Main Color 3 `#c2a64d` <span style="color:#c2a64d">Example</span>.
    - Complementary Contrast to Main Color 4 `#97813b` <span style="color:#97813b">Example</span>.
    - Complementary Contrast to Main Color 5 `#6e5e29` <span style="color:#6e5e29">Example</span>.
    - Complementary Contrast to Main Color 6 `#483d18` <span style="color:#483d18">Example</span>.
    - Complementary Contrast to Main Color 7 `#251f09` <span style="color:#251f09">Example</span>.
  <br>
  - The Semantic accent color 1: Links `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 2: Calls To Actions/Buttons `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 3: Success `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 4: Error/Failed `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 5: Warning/Alerts `#000000` <span style="color:#000000">Example</span>.
  - The Semantic accent color 6: Disabled `#000000` <span style="color:#000000">Example</span>.
  <br>
- **Font Sizes:**
  - Nav Bar: 45px
  - Title: 160px
  - Sub-Headings under titles: 32px
  - Cards and body text: 42px
  - FAQ & Form: 21px
