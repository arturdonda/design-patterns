# Singleton (Creational)

The Singleton pattern is one of the creational design patterns. It **ensures that a class has only one instance** and provides a global point of access to that instance. This pattern is particularly useful when you want to control access to a resource, limit the number of instances of a particular class, or manage shared resources efficiently.

## Intent

The intent of the Singleton pattern is to ensure that a class has only one instance and to provide a global point of access to that instance.

## Structure

The Singleton pattern typically involves a class with a method that creates a new instance of the class if one doesn't exist yet, and if an instance already exists, it returns a reference to that instance. **The class itself is responsible for managing its single instance.**

## Usage

Singleton pattern is commonly used in scenarios where there's a need for exactly one instance of a class, such as:

- Managing access to shared resources (e.g., database connections, thread pools).
- Controlling access to a hardware device or system resource.
- Implementing caches or logging mechanisms.

## Considerations

While the Singleton pattern provides a global point of access to a single instance, it also introduces some considerations:

- **Thread safety**: If multiple threads attempt to access the singleton simultaneously, you may need to synchronize the creation of the instance to ensure thread safety.

- **Lazy initialization**: The example provided above demonstrates lazy initialization, where the instance is created only when getInstance() is called for the first time. However, this approach may not be thread-safe in a multithreaded environment.

- **Testing**: Singleton classes can be difficult to unit test due to their global state. Mocking the singleton instance or using dependency injection can help with testing.

Despite these considerations, when used appropriately, the Singleton pattern can be a powerful tool for managing global state and resources in an application.
