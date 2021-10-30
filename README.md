# Capstone_CS1_2
<h1>The whole repository is divided into four parts. </h1>
<br>
<h2>The first part: the website application part. </h2>
<p> (Application_Kelvin), completed by Hui and Kelvin.</p><br/>



<b> .idea and .DS_Store / these files do not exist after download.</b>
<p> This is because it was uploaded from local. </p>
<img src="https://github.com/Alecia113/Capstone_CS1_2/blob/main/Core_algorithms/Algorithms.png" width="500px"/>




<b>[XXX] = Lecture/Lab Reference</b><br/>
<b>(Justify your decision) =</b> Please justify your decision/selection in the documentation.  You must show your final decision in your report with empirical evidence.<br/>
<b>(Explain the performance) =</b> Please explain the trend of performance, and the reason (or your opinion) why the trends show like that

<br>




<h1>Sentiment Analysis using Recurrent Neural Networks</h1>
<p><b>In this assignment1, we will focus on developing sentiment analysis model using Recurrent Neural Networks (RNN). </b><br/>
Sentiment analysis <b>[Lecture5]</b> is contextual mining of text which identifies and extracts subjective information in source material, and helps a business to understand the social sentiment of their brand, product or service while monitoring online conversations.<br/><br/>
<i>For your information, the detailed information for each implementation step was specified in the following sections. Note that lab exercises would be a good starting point for the assignment. The useful lab exercises are specified in each section.</i></p>

<br/>
<hr>
<br/>


<h2>1. Data Preprocessing (2 marks)</h2>
<p>In this assignment, you are to use the <b>NLTK's Twitter_Sample</b> dataset. Twitter is well-known microblog service that allows public data to be collected via APIs. NLTK's twitter corpus currently contains a sample of Tweets retrieved from the Twitter Streaming API. If you want to know the more detailed info for the nltk.corpus, please check the <a href="https://www.nltk.org/howto/corpus.html">nltk corpus website</a>.<br/>
The dataset contains twitter posts (tweets) along with their associated binary sentiment polarity labels. Both the training and testing sets are provided in the form of pickle files (testing_data.pkl, training_data.pkl) and can be downloaded from the Google Drive using the provided code in the <b><a href="https://colab.research.google.com/drive/1A6azpUOCUU923JF5B4v7t2pNSzLAQ20t?usp=sharing">Assignment 1 Template ipynb</a></b>.</p>
<p>
In this Data Preprocessing section, you are required to complete the following section in the format:</br>
<ul>
  <li><b>Preprocess data</b>: You are asked to pre-process the training set by integrating several text pre-processing techniques <b><i>[Lab5]</i></b> (e.g. tokenisation, removing numbers, converting to lowercase, removing stop words, stemming, etc.). You should justify the reason why you apply the specific preprocessing techniques <b>(Justify your decision)</b>
  </li>
 </ul>
</p>


<br/>
<hr>
<br/>


<h2>2. Model Implementation <b>(7 marks)</b></h2>




