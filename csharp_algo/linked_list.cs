using System;
using System.Collections.Generic;


public class Node
{
  public int value;
  public Node next;

  public Node(int value)
  {
    this.value = value;
    next = null;
  }
}


public class SingleLinkedList
{
  public Node head;
  public Node tail;
  public int length;

  public SingleLinkedList(int value) //constructor
  {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  public void printList()
  {
    List<int> myArray = new List<int>();
    Node currentNode = this.head; 
    while(currentNode != null) //(!currentNode)
    {
      myArray.Add(currentNode.value);
      currentNode = currentNode.next;
    }
    // return myArray;
    for(int i = 0; i < myArray.Capacity; i++){
      Console.WriteLine(myArray[i]);
    }
  }

  public void ourAppend(int value)
  {
    Node newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode; //this.tail = this.tail.next;
    this.length++;
  }

  public void prepend(int value)
  {
    Node newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

}




class MainClass {
  public static void Main (string[] args) {
    SingleLinkedList myList = new SingleLinkedList(7);
    // Console.WriteLine(myList.head.value);

    myList.ourAppend(11);
    myList.ourAppend(23);
    myList.ourAppend(123);
    myList.ourAppend(117);
    myList.ourAppend(9);
    myList.prepend(21);
    Console.WriteLine("Length is:" + myList.length);
    
    myList.printList();

    // Console.WriteLine(myList.printList());

    // for(int i = 0; i < myList.printList().Capacity; i++){
    //   Console.WriteLine(myList.printList()[i]);
    // }
    


  }
}