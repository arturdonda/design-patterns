# Factory Method (Creational)

The Factory Method pattern is a creational design pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. It defines an interface for creating an object but defers the instantiation to subclasses.

## Intent

The intent of the Factory Method pattern is to define an interface for creating objects, but let subclasses decide which class to instantiate. This allows a class to defer instantiation to subclasses.

## Structure

The Factory Method pattern typically involves the following components:

1. **Creator**: This is an abstract class or interface that declares the factory method, which returns an object of a type specified by a subclass.
2. **Concrete Creator**: Concrete Creator classes implement the factory method to create and return concrete product objects. Each concrete creator may implement the factory method differently to produce different types of products.
3. **Product**: This is an interface or abstract class for the products created by the factory method.
4. **Concrete Product**: Concrete Product classes implement the Product interface or extend the Product abstract class. They represent the objects that are created by the factory method.

## Usage

The Factory Method pattern is commonly used in scenarios where:

- The exact type of objects to be created may not be known until runtime.
- A class wants its subclasses to specify the objects it creates.
- A class cannot anticipate the class of objects it must create.

## Considerations

- **Flexibility**: The Factory Method pattern provides flexibility by allowing subclasses to decide which type of objects to create. This makes it easy to add new product types without modifying existing code.
- **Decoupling**: The Factory Method pattern decouples the client code from the specific classes of objects it creates. Clients only need to know about the abstract product and creator classes, not the concrete implementations.
- **Testing**: Factory methods can be used to create mock objects or stubs in unit tests, making it easier to test client code independently of the actual product implementations.

Overall, the Factory Method pattern is a useful tool for providing a flexible and decoupled way to create objects, allowing subclasses to determine the specific types of objects to instantiate.
