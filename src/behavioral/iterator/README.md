# Iterator (Behavioral)

The Iterator pattern is a behavioral design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It decouples the traversal algorithm from the data structure, allowing multiple traversal algorithms to operate on the same data structure independently. This pattern provides a uniform interface for traversing different types of collections.

## Intent

The intent of the Iterator pattern is to provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation. It separates the concerns of data structure and traversal algorithm, allowing them to vary independently.

## Structure

The Iterator pattern typically involves the following components:

1. **Iterator**: This interface declares methods for traversing the elements of a collection. It typically includes methods for accessing the next element, checking if there are more elements, and resetting the iterator.

2. **Concrete Iterator**: Concrete Iterator classes implement the Iterator interface and provide the implementation for traversing a specific type of collection.

3. **Aggregate**: This interface declares a method for creating an iterator object. It represents the collection of objects that the iterator will traverse.

4. **Concrete Aggregate**: Concrete Aggregate classes implement the Aggregate interface and provide the implementation for creating an iterator object for a specific type of collection.

## Usage

The Iterator pattern is commonly used in scenarios where:

- The elements of a collection need to be accessed sequentially without exposing its underlying representation.
- Multiple traversal algorithms need to operate on the same data structure independently.
- The data structure and traversal algorithm need to vary independently and be replaceable at runtime.

## Considerations

- **Uniform Interface**: The Iterator pattern provides a uniform interface for traversing different types of collections, allowing client code to work with iterators in a consistent manner.

- **Custom Iterators**: Custom iterators can be implemented to provide additional functionality or to traverse collections in specific ways, such as in reverse order or filtered by certain criteria.

- **Performance**: Depending on the implementation, the Iterator pattern may introduce a slight performance overhead due to the additional abstraction layer. However, this overhead is usually minimal and acceptable in most applications.

Overall, the Iterator pattern is a powerful tool for decoupling the traversal algorithm from the data structure and providing a uniform interface for traversing different types of collections. It promotes flexibility, extensibility, and maintainability by allowing collections to be traversed in a variety of ways without modifying client code.
