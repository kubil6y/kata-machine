package main

type Node[T any] struct {
	data T
	next *Node[T]
}

type Stack[T any] struct {
	tail   *Node[T]
	Length int
}

func NewStack[T any]() *Stack[T] {
	return &Stack[T]{}
}

func (s *Stack[T]) Peek() T {
	return s.tail.data
}

func (s *Stack[T]) Push(item T) {
	node := &Node[T]{
		data: item,
	}
	s.Length++
	node.next = s.tail
	s.tail = node
}

func (s *Stack[T]) Pop() T {
	var zero T
	if s.tail == nil {
		return zero
	} else {
		s.Length--
		oldHead := s.tail
		s.tail = s.tail.next
		return oldHead.data
	}
}

func main() {
}
