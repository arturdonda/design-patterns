# Creational Design Patterns

Creational design patterns are patterns that abstract the object instantiation process. They help to make a system independent of how its objects are represented, created, and composed. Generally, they achieve this goal by delegating tasks to other objects.

These patterns provide a lot of flexibility to the system because they encapsulate knowledge about which concrete classes are used. Additionally, they hide how instances are created and composed. The focus is on eliminating the client's knowledge about WHAT, HOW, and WHEN is being created and WHO is part of the creation process.

## List of Creational Design Patterns

The original GoF creational design patterns are:

- **[Abstract Factory](/src/creational/abstract-factory/):** Providing an interface for creating families of related or dependent objects without specifying their concrete classes;

- **[Builder](/src/creational/builder/):** Separating the construction of a complex object from its representation, allowing the same construction process to create different representations;

- **[Factory Method](/src/creational/factory-method/):** Defining an interface for creating an object, but letting subclasses decide which class to instantiate. The Factory Method allows a class to defer instantiation to subclasses;

- **[Prototype](/src/creational/prototype/):** Specifying the types of objects to create using a prototypical instance, and creating new objects by copying this prototype;

- **[Singleton](/src/creational/singleton/):** Ensuring that a class has only one instance and providing a global point of access to it.
