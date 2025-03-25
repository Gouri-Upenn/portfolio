// components/Courses/Courses.js
import React from 'react';
import './courses.css'; // Make sure this path is correct


function Courses() {
    return (
        <div className="scroll-box">

            <h1>My Courses</h1>

            <br />
            <h2>CIS 5150 Fundamentals of Linear Algebra & Optimization (Math for Machine Learning) </h2>
            <p>There are hardly any machine learning problems whose solutions do not make use of linear algebra. This course presents tools from linear algebra and basic optimization that are used to solve various machine learning and computer science problems. It places emphasis on linear regression, data compression, support vector machines and more, which will provide a basis for further study in machine learning, computer vision, and data science. Both theoretical and algorithmic aspects will be discussed, and students will apply theory to real-world situations through MATLAB projects.</p>
   

           
            <br />
            <h2>ESE 5420 Statistics for Data Science </h2>
            <p>The course covers the methodological foundations of data science, emphasizing basic concepts in statistics and learning theory, but also modern methodologies. Learning of distributions and their parameters. Testing of multiple hypotheses. Linear and nonlinear regression and prediction. Classification. Uncertainty quantification. Model validation. Clustering. Dimensionality reduction. Probably approximately correct (PAC) learning. Such theoretical concepts are further complemented by exemplar applications, case studies (datasets), and programming exercises (in Python) drawn from electrical engineering, computer science, the life sciences, finance, and social networks.</p>

            <br />
            <h2>ESE 5410 Machine Learning for Data Science  </h2>
            <p>Machine Learning for Data Science is a foundational course designed to equip students with the essential skills necessary for a career in data science and machine learning. This comprehensive course delves into the fundamentals of machine learning, addressing key concepts such as the curse of dimensionality, model selection and validation, regularization, bootstrap and uncertainty quantification. Students will gain hands-on experience with a variety of machine learning models including regression and classification trees, ensemble learning, boosting, support vector machines, neural networks, hierarchical clustering and K-means. The curriculum is structured to provide practical Python programming skills, which are crucial for succeeding in subsequent courses. By applying these techniques to real-world scenarios in finance, business and industry, the course ensures that students not only understand the theory behind machine learning but also how to apply it effectively in professional settings. This course is an indispensable part of the educational journey for aspiring data scientists, laying the groundwork for further studies and applications in the field.</p>

            <h2>CIS 545 Big Data Analytics</h2>
            <p>In the new era of big data, we are increasingly faced with the challenges of processing vast volumes of data. Given the limits of individual machines (compute power, memory, bandwidth), increasingly the solution is to process the data in parallel on many machines. This course focuses on the fundamentals of scaling computation to handle common data analytics tasks. You will learn about basic tasks in collecting, wrangling, and structuring data; programming models for performing certain kinds of computation in a scalable way across many compute nodes; common approaches to converting algorithms to such programming models; standard toolkits for data analysis consisting of a wide variety of primitives; and popular distributed frameworks for analytics tasks such as filtering, graph analysis, clustering, and classification.</p>


            <h2>CIT 591 Introduction to Software Development</h2>
            <p>This course is an introduction to fundamental concepts of programming and computer science for students who have little or no experience in these areas. Includes an introduction to programming using Python, where students are introduced to core programming concepts like data structures, conditionals, loops, variables, and functions. Also provides an introduction to basic data science techniques using Python. The second half of this course is an introduction to object-oriented programming using Java, where students are introduced to polymorphism, inheritance, abstract classes, interfaces, and advanced data structures. Students will also learn how to read and write to files, connect to databases, and use regular expressions to parse text. This course includes substantial programming assignments in both Python and Java, and teaches techniques for test-driven development and debugging code.</p>
            
            <br />

            <h2>CIT 592 Mathematical Foundations of Computer Science</h2>
            <p>This course introduces students to math concepts that form the backbone of the majority of computer science. Topics covered include sets, functions, permutations and combinations, discrete probability, expectation, mathematical induction, and graph theory. The goal of the course is to ensure that students are comfortable enough with the math required for most of the CIS electives.</p>

            <br />

            <h2>CIT 593 Introduction to Computer Systems</h2>
            <p>This course provides an introduction to fundamental concepts of computer systems and computer architecture. Students learn the C programming language and an instruction set (machine language) as a basis for understanding how computers represent data, process information, and execute programs.</p>

            <br />

            <h2>CIT 594 Data Structures and Software Design</h2>
            <p>This course focuses on data structures, software design, and advanced Java. The course starts off with an introduction to data structures and basics of the analysis of algorithms. Important data structures covered include arrays, lists, stacks, queues, trees, hash maps, and graphs. The course also focuses on software design and advanced Java topics such as software architectures, design patterns, and concurrency.</p>

            <br />

            <h2>CIT 595 Computer Systems Programming</h2>
            <p>This course is a continuation of CIT 593 and introduces students to fundamental concepts in computing systems. The course is divided into two parts. The first half of the course introduces important concepts in modern operating systems: processes, scheduling, caching, and virtual memory. The second half of the course provides an introduction to fundamental concepts in the design and implementation of networked systems, their protocols, and applications. The course will use the C program language, and will develop your knowledge on C system calls, and libraries for process/thread creation and manipulation, synchronization, and network communication.</p>

            <br />
            
            <h2>CIT 596 Algorithms and Computation</h2>
            <p>This course focuses primarily on the design and analysis of algorithms. It begins with sorting and searching algorithms and then investigates graph algorithms. In order to study graph algorithms, general algorithm design patterns like dynamic programming and greedy algorithms are introduced. A section of this course is also devoted to understanding NP-Completeness.</p>


            <br />
       

        </div>
    );
}

export default Courses;

