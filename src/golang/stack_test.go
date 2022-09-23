package main

import "testing"

func TestStack(t *testing.T) {
    stack := NewStack[int]()

    stack.Push(5);
    stack.Push(7);
    stack.Push(9);

    if stack.Pop() != 9 {
        t.Error()
    }

    if stack.Length != 2 {
        t.Error()
    }

    stack.Push(11)

    if stack.Pop() != 11 {
        t.Error()
    }
    if stack.Pop() != 7 {
        t.Error()
    }
    if stack.Peek() != 5 {
        t.Error()
    }
    if stack.Pop() != 5 {
        t.Error()
    }
    if stack.Pop() != 0 { // default value
        t.Error()
    }

    stack.Push(69)
    if stack.Peek() != 69 {
        t.Error()
    }
    if stack.Pop() != 69 {
        t.Error()
    }
}

