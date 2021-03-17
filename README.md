# Course Websites

> Repo for the Hoagie Course Websites team

## Demo

* [Cloudflare Pages](https://course-websites.pages.dev/)

## Tools

- [Eleventy](https://www.11ty.dev/)

## Getting Started

### 1\. Clone this repository

```
git clone https://github.com/HoagieProjects/course-websites.git
```

### 2\. Navigate to the directory

```
cd course-websites
```

### 3\. Install dependencies

```
npm install
```

### 4\. Build and view the site

```
npx @11ty/eleventy
npx @11ty/eleventy --serve
```

By default Eleventy outputs to a `_site/` directory. Enter the URL that is shown in the terminal to see the results!

## Extras

### Setting an alias

Local package installation is preferred, which requires using `npx` for each command run with Eleventy

You can set an alias to run Eleventy instead of having to use `npx @11ty/eleventy` each time:

For Bash:

1. Open your `~/.bashrc` file: 

```
nano ~/.bashrc
```

2. Add this line and save the file:

```
alias eleventy="npx @11ty/eleventy"
```

3. Make alias available: 

```
source ~/.bashrc
``` 

If you are using a different shell the process may differ slightly.
