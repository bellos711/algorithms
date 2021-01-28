#include <iostream>
#include <string>
#include <vector>
#include <cctype>

using namespace std;

void acronymize(string);

int main()
{

    /* 
    Acronyms

    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 

    Do it with .split first if you need to, then try to do it without
    */

    string str1 = " there's no free lunch - gotta pay yer way.";
    string expected1 = "TNFL-GPYW";

    string str2 = "Live from New York, it's Saturday Night!";
    string expected2 = "LFNYISN";
    

    
    cout<<str1<<endl;
    cout<<str2<<endl;
    
    cout<<"\n\n======================================================\n";

    acronymize(str1);
    cout<<"\n======================================================\n";
    acronymize(str2);
    

    cout<<"modified\n";
    return 0;
}

void acronymize(string theSentence)
{
    vector<string> myStringVector;

    string addToVector;
    for(int i = 0; i < theSentence.length(); i++)
    {
        if(theSentence[i] == ' ' || theSentence[i] == '.' || theSentence[i] =='!' || theSentence[i] =='?')
        {
            myStringVector.push_back(addToVector);
            addToVector="";
            // spaceCounter++;
        }
        else
        {
            addToVector+=theSentence[i];
        }
    }


    for(string strVec : myStringVector)
    {
        // cout<<strVec<<endl;
        putchar(toupper(strVec[0]));
        // cout<<strVec<<endl;
    }
}