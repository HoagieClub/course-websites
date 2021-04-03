---
title: "Project"
eleventyNavigation:
  key: "Project"
  order: 3
---

## Overview

The COS 333 project is an opportunity to undertake a larger and more elaborate task than any of the assignments: to design and implement a significant piece of software, working in teams of 3 to 5.

The intent is that this will not be just hacking, but a serious attempt to simulate some aspects of reality: choosing something suitable to work on, planning how to get it together, designing it before building it (though allowing for the inevitable changes of direction as things evolve), building it in stages, testing it thoroughly, trying it out on real users, and documenting and presenting the result, all as part of a small team. If you do it well, this should be something that you can show with pride to friends and prospective employers; you might even make money with it.

The project will involve many of the issues of software engineering as they occur in small, multi-person real-world projects. Some of this material will be discussed in class, and some will be found in supplementary readings.

The considerations affecting the form of the project are:
- Projects must have enough common structure to make it feasible for us to oversee a substantial number of projects, and to grade them fairly and uniformly.
- At the same time, the basic project should have plenty of room to try out interesting ideas, and freedom to use a broad spectrum of languages and tools.
- It must be relevant to the general themes and topics of the course, which are programming techniques, languages, tools, components and interfaces.
- It should be of some intrinsic interest and potential utility.

___

## Project Definition

A large number of real-world systems are based on what is often called the three-tier model: a user interface, a database for persistent storage, and some process(ing) between them. Many web services use this architecture. For example Amazon has a web-based user interface; the data are a catalog and customer information, and the process is a wide variety of searching and data-mining operations. News and financial services are analogous: again, a user interface, a background information gathering and filing service, and mechanisms that let a client register for, access and process interesting items. Cell phone systems often have similar components, either on the device or in the cloud. Browser extensions do too.

The project this semester will be much the same as in previous semesters:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**build a networked three-tier system for any application that appeals to you.**

This is a *very* open-ended specification, so the big problem is likely to be defining a topic of the right size. Almost every web service will suggest something, perhaps novel or perhaps "We can do that much better"; either would likely be fine. Hiding, selecting, or merging data from existing web services is a possibility; shopping, news and other bots are examples, as are the myriad mashups that combine information from multiple sources. Cell phone applications are often like this too, as are browser extensions.

Numerous web services (including Google, Amazon, and Facebook) provide program interfaces, which might be a way to put a different face on some aspect of their systems. Using these APIs could be good for potential projects, and creating a good API is a fine example of a non-graphical user interface.

Look around campus for other possibilities: maps, tours, notification services, databases, and so on are all potentially interesting and feasible, though make sure that the information that you want to use is available — concerns for privacy, property and turf can all get in the way of a great idea. You might find it helpful to consider the [Princeton data sources](https://www.cs.princeton.edu/courses/archive/spr21/cos333/datasources.html) that are available to you. Doing so might suggest project ideas, might help you to determine if your project idea is feasible, and no doubt will help you to access any Princeton data sources that you decide to use. We often hear about projects from staff, faculty and other students. You might find something appealing on this [list of project ideas](https://www.cs.princeton.edu/courses/archive/spr21/cos333/projectideas2021.html) from other people and by talking to people in other departments. If you want to explore further, come talk to the course instructors.

Some of the best projects come from noticing a task that is done by hand or poorly by machine, when it could be done really well by a suitable program, or where something complicated could profit from a neat user interface. Think about how rapid interaction might be used in some new application, or how some standalone program could be web-ified, or how some service could work on a phone. Or maybe focus on tools that make it easier to build such things, and create a couple of examples that demonstrate the wonders of your tools.

In our experience, in successful projects the people are really turned on by what they are doing, whether because it's their own idea and that's sufficient motivation, or because they are building something that someone else cares a lot about too. Either way, that kind of engagement usually leads to the best results. Be wary of projects where none of the team is really interested, or where one member is driving the whole thing, or where the application is too far away from your own experience.

[Previous projects](https://www.cs.princeton.edu/courses/archive/spr21/cos333/projectprevious.html) have included web-based calendars and financial systems; numerous improvements of campus services and agencies; rental and exchange systems; course evaluation, selection and scheduling; information services for the local environment; social networks; and several map mashups.

The assignment is to create such a system, using any combination of existing tools and new code. The functionality that you must provide includes the following:

- **User interface:** This is what the user sees: an interface, often graphical but not necessarily, that supports some kind of direct interaction between user and system.
- **Process:** This is the "value added" part, since this is where you process and glue together what the user wants with information sources and repositories.
- **Data management:** Somewhere there's some persistent data, whether maintained by your system on a local machine, or accessed as needed from the web. You don't absolutely have to use a database system, but we strongly encourage using something like MySQL, PostgreSQL, or MongoDB. You must have some component that records significant state and uses it in subsequent interactions.

How big? There's no official requirement, but it ought to ultimately involve some thousands of lines of code of your own; churning out a thousand lines of repetitive JavaScript or mechanically generating a bunch of Python with Flask isn't enough. Some systems have been as big as 10,000 lines of C++; that's more than necessary, though it was great work. In any case, we will expect to see clean, well-written code, with appropriate attention to principles of sound software engineering.

___

## Some Options

Distributed or local? Your system must involve a network connection, even if it is only to a local host or the database, so as to leave open the option of distributed operation.

Languages, tools and environment? You can use any combination that appeals for any aspect — web-based or stand-alone; Windows or Unix or Mac or phone; Java or Python or Javascript or C#; Ruby on Rails or Flask or Django; your own machine or a real server like Heroku or AWS. The only restriction is that your running system must be readily accessible so you can demo it effectively and we can run it for grading. We also require the use of the Git version control system and the GitHub repository service. They will save your life sometime for sure.

Build versus buy? Much modern software development is done by combining code and components that others have created. You can use as much of this as you like, as long as the finished product acknowledges the work of others, and has a substantial contribution of your own.

___

## Things to Think About

We have attempted to make this as open-ended as possible. This is your chance to invent something new, or to do something better than others do. You might think of this as practice for a new e-business or e-service, the sort of e-thing that made some of your predecessors here (like Meg Whitman and Jeff Bezos) into e-zillionaires. Of course if you have a really good idea and are acquired and do an IPO by Dean's Date, it's an automatic A+.

But you have only about 12-13 weeks, so you can't get too carried away. Part of the assignment is to plan exactly what you are going to create, what each team member will be responsible for, and what interfaces you will require between components so independently-created pieces will fit together. What schedule will you follow? How can you work on different parts in parallel and keep them integrated? How will you ensure, if your time estimates are too optimistic (as they inevitably will be), that you have a working subset, rather than a non-working collection of partially completed pieces? How will you convince skeptical instructors that you are making progress, not just writing code (or doing nothing at all)?

Since the project will involve multiple people, a major task is to divide the work into suitable pieces, with planned interfaces. Each of these components must be a separate entity that can be implemented and tested separately. But you will have to think carefully about the interfaces between them: the problems caused by poor interfaces are a recurring theme in [comments from previous projects](https://www.cs.princeton.edu/courses/archive/spr21/cos333/projectcommentsfromprevious.html) (and, happily, so are the strongly positive experiences reported by teams that did a good job on interfaces).

The project will represent 50 percent of your course grade. All team members will get the same grade (with the potential for a correction in the unlikely event of someone not carrying their fair share of the load), so be sure that you all agree on who will do what, by when, and to what standard. Each person must contribute their fair share, including writing a reasonable fraction of the code for the system, no matter what other role they play.

Here are some things you must start thinking about now:
- How big a task are you proposing to take on? It must be big enough to justify spending well over half a semester on it, but not so big that it's unrealistic.
- What are the components or pieces going to be? How will you organize your project into stages so that you can stop at any point and still have something that works? You don't want a project where everything must be finished before anything works — "big bang" projects are a bad idea.
- What will you learn from it? You should try a project that will force you to learn something new, like a significant language or tool or system, but you don't want to take on too many new things all at once.
- What technical issues lie on the critical path? If you plan to use some particular tool or language or component or communication technique, what quick experiments can you perform now to be sure that it works and does what you need? Connecting components across a network in the face of security restrictions is sometimes harder than might appear; you want to know about potential roadblocks early. Even installing a language or a database or a development kit can take much longer than expected. Browser compatibility is a nightmare if you want to do it thoroughly. If you need someone else's data or other resources, make sure early that you can get access to them. If you're expecting to use the beta version of some software "about to be released", watch out; don't rely on other people to finish their work on your schedule.
- How will you divide the work among the members of the team? This is partly personalities and partly interests and aptitudes. Some people are better coders, others write English better, or are great at designing web pages; some plan ahead, others work well under last-minute pressure. Some take charge naturally; others are happier with a defined task set by someone else. Organize yourselves to match the work to the people, and try to have a balanced team — mere mortals who work well together can get more done than a team of prima donna superprogrammers. Teams of 3 are a bit dangerous; if one team member doesn't contribute his/her fair share (gets sick, flakes out, drops the course, etc.), then the other two could be unreasonably stressed. Teams of 5 are acceptable; but we will expect more from bigger teams. Teams of 4 probably are best.

___

## Deliverables

Since the project involves more than half a semester, it is possible to develop a significant piece of software, but serious planning and steady work will be required for your project to be completed on time. To encourage planning, organization and regular activity, the project will have several deadlines that will be enforced. [Some of the dates near the end may shift a bit; there will be adequate warning.] The TAs will be responsible for primary advisement of the teams and the lead instructor will act as backup and second-level advisement. You will be required to meet with your TA adviser on weekly basis; the course [Schedule](/schedule/) page provides details. These meetings are a graded component of the course, so preparation and attendance are mandatory — no excuses.

We will also try to follow good software engineering practice as much as possible. We will lean heavily on things that have been helpful in previous offerings, such as design documents, status reports and reviews aimed at helping you to organize and the instructors to monitor. All of these also are mandatory and graded.

___

## Deliverable: Row in the ProjectFinder Application

The COS 333 ProjectFinder Application is a web application to help you find a project team. It also will help you to learn what other COS 333 students are doing for their projects, and will help other students to learn what you are doing for your project. To access the application browse to this address:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[https://cos333.cs.princeton.edu/ProjectFinder/](https://cos333.cs.princeton.edu/ProjectFinder/)

At the beginning of the semester, insert a row into the application to indicate your:

- Last name.
- First name.
- Topic status. Are you looking for a topic?
- Team status. Are you looking for (more) teammates?
- Technical interests. Enter technologies that you would like to use on your project. For example, you might enter Python, web programming, mobile programming, ... It's OK to leave this cell blank, but it could be to your advantage to enter something.
- Project interests. Enter a short description (a few words) of any project areas that you would like to pursue, or any project ideas that you have in mind. It's OK to leave this cell blank, but it could be to your advantage to enter something.
- Project name. Enter a short (one to three word) project name. For proper sorting, please spell your project name consistently with your teammates. Leave the project name blank if you haven't yet found a project, and fill it in later when you have found a project.
- Project description. Enter a one sentence project description. Leave the project description blank if you haven't yet found a project, and fill it in later when you have found a project. (Actually, it's fine if only the team leader of your project enters the project description.)

Then use the information displayed by the application to contact other students who have similar project interests or similar (or maybe complementary!) technical interests, thereby forming a project team. Repeatedly update your row as appropriate until your row is complete. Your row must contain a project name by the time of the next deliverable, the Project Approval Meeting with Instructors

You must insert your row into the Project Finder Application even if you already know which project you intend to work on. Remember that the purpose of the application is not only to help you find project teammates, but also to inform other students about what you are doing for your project.

___

## Deliverable: Project Approval Meeting with Instructors

Your team must meet with the course's instructors for about half an hour to discuss your plans before they are set too firmly. If you need help finding a topic or choosing among several, please talk to the lead instructor and TA advisers well before this meeting; we're happy to respond to ideas, make random suggestions, and help steer you, starting any time. But don't come to this meeting with 2 or 3 vague ideas, no team consensus, and no concrete plans. **It is your responsibility to come up with a project and teammates**, so don't leave this to the last minute. If you want to explore projects that involve other parties on campus, come see us early so we can help you make connections.

___

## Deliverable: Version Control Repository

Your team leader must create a *Version Control Repository*. You must use the Git version control system, and the GitHub web repository hosting service. Lectures provide details. Throughout the semester you and your teammates must store your project code in your Version Control Repository.

Your Version Control Repository must be readable and writable by you and your teammates. We must have read access to your Version Control Repository. We recommend (but do not require) that your Version Control Repository be inaccessible to anyone other than you, your teammates, and us.

Use these GitHub usernames when making your GitHub repository available to us:

- For Robert Dondero: rdondero
- For Willie Chang: williehwc
- For Anat Kleiman: anatk2020
- For Satadal Sengupta: SatadalSengupta
- For Pi Songkuntham: pisimulation

___

## Deliverable: Team Directory

Your team leader must create a *Team Directory* in your team leader's Google drive. Throughout the semester you and your teammates must compose documents in your Team Directory. The documents that you and your teammates must compose are described below.

The name of your Team Directory must be the same as the name of your project, or at least must contain the name of your project.

Your Team Directory must be readable and writable by you and your teammates. We must have read access to your Team Directory. Your team leader must tell us the URL of your Team Directory by sending an email to [cos333instructors@lists.cs.princeton.edu.](mailto:cos333instructors@lists.cs.princeton.edu.) Your Team Directory must be inaccessible to anyone other than you, your teammates, and us.

Use these addresses when making your Team Directory accessible to us:

- For Robert Dondero: donderorobert@gmail.com
- For Willie Chang: williehwc@gmail.com
- For Anat Kleiman: anatk@princeton.edu
- For Satadal Sengupta: satadals@princeton.edu
- For Pi Songkuntham: pisong@princeton.edu

___

## Deliverable: Project Overview Document

Your team must compose a *Project Overview* document in your Team Directory in a file named ProjectOverview. Your Project Overview must provide a thorough proposal of what you expect to accomplish in your project, and how. This must include an overview of what your system will do, the basic organization and components, a rough schedule of what you expect to accomplish each week, and who will be doing what. It must identify any significant risk factors and what you will do if bad things happen.

The purpose of the Project Overview is to encourage you to do some detailed thinking about what your project is, and how you're going to work on it. The more thinking you do ahead of time, the easier the pieces will come together when you do start to implement. Implementation before design is not a good idea.

The Project Overview must sketch out what you expect to accomplish in your project, and how. This must include an overview of what your system will do, the basic organization and components, a rough schedule of what you expect to accomplish each week, and who will be doing what. It must identify any significant risk factors and what you will do if bad things happen. ("We're expecting a large donation to buy a server; we will drop the course if this doesn't come through in time.")

The Project Overview must be roughly the equivalent of 3-7 printed pages. There's no need for fancy graphics or strong production values — the content is what counts, though a reasonable level of detail, perhaps some diagrams and screenshots, and good English free of typos and spelling mistakes will help suggest that you have taken some care with it.

The Project Overview must contain these sections:

### Section 1: Identification

The Identification section must contain this information:
- Project name.
- Project leader name and email address.
- Team member names and email addresses.
- The URL of your BitBucket or GitHub source code repository.
- A statement confirming that the lead instructor and your TA adviser have read-only access to your source code repository.

### Section 2: Elevator Speech

Your project's *elevator speech* must be a single paragraph that states clearly and succinctly what your system does.

The idea is this: What would you say if you were alone in an elevator with Bill Gates for 60 seconds, and had to ask him for funding for your project?

The speech should be a short attention-grabbing description without big words but with good buzzwords. Essentially it should be a very terse summary of the information that you present in the following sections. You may be asked to give your team's elevator speech during one of the lectures; so be prepared.

### Section 3: Overview

The Overview section must provide a general overview of what your project is, what it hopes to accomplish and the like.

### Section 4: Requirements

The Requirements section must provide a few sentences describing the problem that your system will solve. More specifically, you must describe in detail the intended users of your system, how your system will benefit them, and contrast with existing solutions.

### Section 5: Functionality

The Functionality section must provide use cases that illustrate the major functionalities of your system. If you work through some use cases carefully, the rest of the system will be a lot easier — this should be done before you worry about implementation details. Joel Spolsky's articles on [specifications](http://www.joelonsoftware.com/articles/fog0000000035.html) are worth reading for a general guide.

### Section 6: Design

The Design section must describe your major components. Each piece must have outlined what it does, how it connects and interacts with the other pieces, and their most likely implementation(s). At the very least you must cover your three "tiers". The business logic and/or middleware is likely "where the magic happens" with your specific project, so you will want to spell it out carefully. In this section you must pay specific attention to interfaces between components — interfaces insulate each part of the system from details of the other parts, allowing modularity of both design and implementation. With proper interface design, you must be able to make significant changes to the details of your interface or database without changing the core code much, if at all.

Include a brief discussion of the likely implementation choices: languages and tools for various parts, operating environments for servers and clients, choice of database system, code repository, and the like. None of this is binding, but you must have thought seriously about it.

### Section 7: Milestones

The Milestones section must begin with a description of your "MVP", that is, your minimum viable product. It also must list your "stretch goals" for your system, in the order in which you will attempt to achieve them.

Then your Milestones section must show your anticipated project schedule. That is, your Milestones section must list the significant milestones that you plan to achieve, and when you intend to achieve them, on a weekly (or near weekly) basis. Each milestone must be a concrete task or feature that is 100% done, not a vague description like "coding" or "debugging". Allow for slippage, and for all the required "overhead": demo, documentation, etc.

### Section 8: Risks

The Risks section is the place to show that you've thought about what you need to do and what might go wrong or cause delay. We're not interested in generic risks like someone getting sick, but in perils specific to your plan: learning new languages, tools, and systems; dependence on data or software or hardware acquisition. What will you do if your preferred path is blocked? Give this some thought, so you don't discover a month from now that you simply can't have something that you need.

___

## Deliverable: Timeline Document

You must compose, incrementally throughout the semester, a Timeline document in your Team Directory in a file named Timeline. The Timeline must indicate, on at least a weekly basis, the tasks that each member of the team accomplished recently. You must update the Timeline throughout the entire project, including the reading period. You must review your Timeline with your TA adviser during each weekly status meeting.

___

## Deliverable: Weekly Status Meetings

Your team must have weekly meetings with your TA adviser starting after the Project Approval Meeting and through the last day of classes. In the first meeting you must go over the project in more detail, describe the project schedule, the components and interfaces, and the allocation of people to tasks. It is highly desirable to plan a sequence of stages such that each represents a working system; if your schedule proves too optimistic, this gives you a fallback that you can still demonstrate.

Before each meeting with your TA adviser, you must strive to resolve any technical issues, so that you can show concrete progress since the last meeting, ideally a perpetually working system with a monotonically increasing set of features. The meeting with the TA adviser is a good time to discuss open issues regarding design choices, project evolution, and team responsibilities.

During meetings you must describe your progress since the previous meeting, as documented in your Timeline document in your 333 Google directory, and as demonstrable with a working version. Given the short time scale, there really has to be progress every week. Your TA adviser will be looking for evidence that you're getting somewhere, though of course there will be setbacks and dead ends; we just want to make sure those are under control.

Our intention is that the meetings will encourage you to think about what you have done and what you're going to do next. The meetings are a chance to talk things through, and get advice and opinion from someone supportive who is looking over your shoulder. Your TA adviser's job is not to solve your technical problems, and it's certainly not to tell you what to do — it's your project. But pay attention, especially if your TA adviser is concerned about something.

Everyone must come to all meetings if at all possible. If you absolutely must be away, courtesy and a concern for your grade mandates sending an explanation well before the meeting. Unannounced absences, and especially total no-shows, are unacceptable.

Be prepared. You might find it a good idea to meet among yourselves the day before your TA adviser meeting. The time you spend thinking about and organizing for your meeting will pay off. Your TA adviser will be looking for you to be obviously prepared, with an organized agenda, and volunteering information; your TA adviser should not have to drag things out of you, and will definitely be unhappy if you're clearly just winging it with no evidence of effort ahead of time.

___

## Deliverable: Prototype

Your team must develop, and demonstrate in your weekly meeting, a bare-bones prototype that shows approximately what you are trying to do, and what your system's core components will be, and how they will be accessed. It need not do much, but it must be demonstrate end-to-end connectivity and do some minimal part of the job. You must not be considering major feature changes after this stage, though you need not have many of the features actually implemented yet.

___

## Deliverable: Alpha Version

Your team must develop, and demonstrate in your weekly meeting, an "alpha" version — an almost working version of the core functionality of your project. "Core" means the basic operations that form the essence of your project; if you were doing Amazon 2.0, for instance, this might mean searching for books and accepting orders. "Almost working" means that wizards (you) can help experienced programmers (us) to use the system. Your code may crash and need restarting or suffer other bugs and stability issues. Ancillary features and reach goals may still be stubbed out.

Most teams plan to deploy their systems — to Heroku, cPanel, AWS, or some other hosting service. If your plan indeed is to deploy your system, then your alpha version must be deployed.

Your alpha version must be able to convince us that your project can be completed by the deadline.

This is the time to start getting real users to evaluate your system.

___

## Deliverable: Beta Version

Your team must develop, and demonstrate in your weekly meeting, a "beta" version of your system. The beta version must show that all core features work, and all intended features must be installed and implemented, though not necessarily complete or stable. No major component must still be in stub form — this is the "drop date" for features that have not been implemented. Your system at this stage must survive casual experimentation without guidance or hand-holding. It is very useful if you can get real users before the beta: ask other teams, your friends and roommates, and anyone else to try your system to see how well it works.

Drafts of written material (as described in subsequent sections of this document) must be underway.

___

## Deliverable: Presentation and Slides

Your team must give a 20 minute public presentation of its work during reading period week. **All team members must attend the presentation.** The presentations will be clustered into sessions, with two or three presentations per session. You must attend the other presentations in your session, for instruction and moral support.

The presentation must include a live demonstration of your work. The presentation will determine a significant portion of your grade, so you (and we) want it to go as smoothly as possible. In order to assure this, start thinking about your presentation now. You could picture your presentation/demonstration as an event that will make or break your "company" — you'll be on the spot in a foreign place, with an audience, though the audience is really just a group of very supportive potential customers, investors, friends and family. As to content, the "trade show" metaphor is useful, but you must aim for more than just a glitzy demonstration — you must also spend at least some time discussing the architecture, the trajectory of the project, and providing evidence that you learned something.

One possible outline of your presentation would be: a short introduction of what your system is supposed to do; a demonstration of its most important features; a summary of other features; an overview of the system's architecture and implementation, especially showing the system's database schema; an anecdote of something that worked well or failed disastrously such that you were able to take something away from the experience; and something that you might explore further or do differently if you were to start all over again or had more time.

You will be allotted 20 minutes, which is not a lot of time. Plan on using about 15 minutes, to leave time for questions, setup and teardown, and other delays. In previous years teams have done well on timing; rehearse to keep the streak alive. Plan demos that do not require much typing or mousing or window-switching — this invites things to go awry, and invites the audience to get restless while you poke around. You just don't have enough time.

Have fun. The projects are really interesting, and the enthusiasm of their presenters helps make that evident to all in attendance. Because a healthy audience amplifies that enthusiasm, each student is required to attend the other presentations in the same session and you are strongly encouraged to attend more, for edification and moral support. Visitors are welcome, so bring your friends and family. Typical projects are great; come and hear about them. We will advertise the schedule of demos in advance.

If your team composes slides to support the presentation, then you must place the slides in your Team Directory in a file named Slides.

___

## Deliverable: User's Guide Document

Your team must compose a *User's Guide* document, and place it in your Team Directory in a file named UsersGuide.

Your User's Guide must describe *what your system does* and *how to get your system to do what it does*. It must describe all (or at least most) of the features of your system in enough detail that we know of their existence, and know how to give them a try. It must **not** describe *how your system works*. (The Programmer's Guide must do that.)

Your User's Guide is the most important document supporting your system. It's via your User's Guide that we will learn how to use your system. It's especially important that your User's Guide be correct. If it's incorrect, then we won't necessarily know if the error is in your User's Guide or in your system. In either case, regrettably, your grade would be penalized.

When composing your User's Guide assume that the reader (1) is a competent computer user, (2) is not necessarily a computer programmer, and (3) knows nothing about your system. If you must make other assumptions about your users — for example, that they use Google calendar, use Facebook, use a smart phone contacts list, and so forth — then discuss those assumptions with us before composing your User's Guide, and state those assumptions explicitly near the beginning of your document.

Your User's Guide must begin with a short introduction of your system. Thereafter your User's Guide must contain use cases. Each use case must have a title that states a specific goal. Then each use case must provide instructions on how the user should interact with your system to achieve that goal. To test your system, we will perform the instructions for each use case precisely as described in your User's Guide — although sometimes with purposeful digressions.

Each use case must be **concrete**. For example, don't write "Click on the Save button and then enter a file name." Instead write "Click on the Save button and enter the file name 'myfile1'." Don't write "Enter a user name and password." Instead write "Enter username xxx and password yyy".

Each use case also must be **specific**; each use case must illustrate one logical path through your system. For example, don't write "At this point you can either click on the Add button to add a new entry, click on the Delete button to delete an existing entry, or click on the Edit button to edit an existing entry." Instead write "Click on the Delete button to delete the entry named xxx." Then compose an additional use case to illustrate how to add a new entry, and an additional use case to illustrate how to edit an existing entry.

The first use case must be entitled "Accessing the system" (or something like that). It must give the user instructions on how to access/create/install your system. If your system is a web application that is hosted in the cloud, then the first use case will be easy to compose. If your system must be installed on the user's computer or smart phone, then the first use case might be much more difficult to compose.

Some use cases might make sense only if your system already contains data for the particular user. In that case, pre-populate your system's database with those data for the particular user.

As part of the process to compute your project grade, your TA adviser will follow the instructions in your User's Guide to run your system. The lead instructor will do the same. Your TA adviser and the lead instructor will not work together; the lead instructor probably will run your system a day or two after your TA adviser runs it. So make sure that the instructions in your User's Guide handle the sequential running of your system. For example, make sure that your database need not be reset after your TA adviser runs your system and before the lead instructor does so. Or, if your database must be reset, then say so in your User's Guide.

Collectively your use cases should cover all, or at least most, of your system's functionality. It would be reasonable to add a final *Additional Functionality* section describing non-mainstream functionality of your system that you couldn't reasonably illustrate through use cases.

___

## Deliverable: Programmer's Guide Document

Your team must compose a *Programmer's Guide* document, and place it in your Team Directory in a file named ProgrammersGuide. Your Programmer's Guide must describe *how your system works*. It must not describe *what your system does*. (Your User's Guide must do that.)

Your Programmer's Guide must describe the internal structure of your system in intermediate depth, as though for programmers who will be maintaining the code after you hand it over. Help them to understand how the system is put together, in an orderly and compact description, without getting mired in lowest-level details. The document must provide a good working description of the system and its implementation, but not a line-by-line walkthrough of the code. This also is the place where you implicitly acknowledge the software systems that you used but did not compose.

When composing your Programmer's Guide, assume that the reader is a maintenance programmer who (1) is a competent computer programmer, (2) knows nothing about your system, and (3) must fix a bug in your system or add some functionality to your system. The goal of the Programmer's Guide is to help the maintenance programmer understand how your system works. (In the context of COS 333, the goal is to help us understand how your system works, that is, to help us relate the functionality of your system to its code.)

So what kind of information would help the maintenance programmer? Your Programmer's Guide must start with a boxes-and-arrows diagram that shows your system's top-level components and the communication between them, followed by a textual description of each component and each line of communication. Then, for each top-level component, your Programmer's Guide must contain a "second-level" boxes-and-arrows diagram followed by textual descriptions. Then, for each second-level component, your Programmer's Guide must contain a "third-level" boxes-and-arrows diagram followed by textual descriptions. And so forth, to whatever depth is necessary.

How deep should you go? It probably will be appropriate to stop when the mapping between boxes and source code files is obvious. That is, assuming that your source code has reasonable file-level modularity, it probably will be appropriate to stop when the boxes reasonably can be labeled with the names of source code files. It would be unusual for any team to use more than two levels of diagrams.

Your Programmer's Guide must show your system's database schema. Finally, it must conclude with a list of interesting design problems that you encountered, and how you solved them.

___

## Deliverable: Product Evaluation Document

Your team must compose a *Product Evaluation* document in your Team Directory in a file named ProductEval. Your Product Evaluation should present your evaluation of your final product.

The first part of the document must cover *testing*. It must answer the question "How well does your product work?" Does your product behave as you intended it to behave? How did you go about testing your product? Which aspects of your product are robust? Which are fragile? What are the known bugs?

The second part of the document must cover *evaluation by users*. It must answer the question "How well does your product meet the needs of its users?" For this section you must conduct a formal evaluation of your product involving "real" users. You must compose tasks, present the tasks to typical users, observe the users as they used the system to perform the tasks, encourage the user to talk aloud while performing the tasks, take thorough notes, and report the results. (It would be appropriate to include the task list and your notes in an appendix.)

The third part of the document must cover *evaluation by experts*. It must consist of your own formal evaluation of your product using the *heuristic evaluation* technique. Optionally, you also should evaluate some important parts of your product using the *cognitive walkthrough* technique. Both heuristic evaluation and cognitive walkthrough will be described in lectures.

___

## Deliverable: Project Evaluation Document

Your team must compose a *Project Evaluation* document in your Team Directory in a file named ProjectEval.

The Project Evaluation must describe how the project worked out. How good was your original planning? How did your milestones go? What was your experience with design, interfaces, languages, systems, testing, etc.? What surprises, pleasant or otherwise, did you encounter on the way? What choices did you make that worked out well or badly? What would you like to do if there were more time? How would you do things differently next time?

Imagine that you are composing this section for your (friendly!) boss or professor and want to explain what you learned that could be applied to the next project. Some teams present a single unified section, synthesized from the thoughts of all team members. Other teams prefer to compose separate pieces of the section, since they focused on different project components and learned different things. Either is fine, but in both cases aim for true introspection: try to avoid repetition or banal generalities like "this was really interesting and we learned a lot".

___

## Deliverable: Source Code

Your team must create a directory named src in your Team Directory, and must copy all source code to your src directory. That includes anything you created, especially source code and similar material. If you have help files, images, data, etc., put them in the `src` directory too. Sub-directories are fine. Do not include other files that are created by compilation or downloaded from somewhere else: no object files, executables, class files, Git control files, etc.

Be sure that your code is complete before you copy it to the src directory. The instructors will be looking through your source code to get an idea of what you did and how well you did it, so everything must be there.

___

## Deliverable: Final Product

Your final product is due at 5:00PM on the Dean's Date. For web apps, this means that we need the final URL and that the site needs to stay live for approximately two weeks beyond Dean's Date. For device apps or other stand-alone programs, this means that you may need to lend the course staff a device, or maybe meet with some assortment of the course staff to do a demo on your device — where you will know that everything is compatible.

___

## Grading

Grading for the project will be based on a number of criteria, including your:

- Row in the Project Finder Spreadsheet.
- Initial meeting with the lead instructor.
- Project Overview document.
- Status meetings with your TA adviser: preparation and participation.
- Demonstration of your prototype.
- Demonstration of your alpha version.
- Demonstration of your beta version.
- Presentation: organization, preparation, polish, interest.
- User's Guide document.
- Programmer's Guide document.
- Product Evaluation document.
- Project Evaluation document.
- Final Product: quality of functionality, quantity of functionality, usability.

You are encouraged to ask questions that will help clarify things for everyone. Murphy's Law applies to projects and their administration, so there undoubtedly will be screwups. We apologize for those in advance, but of course they too will be a simulation of reality.
