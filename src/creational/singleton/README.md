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

## Pros and Cons

### Pros:

- **Global access**: Singleton provides a global point of access to its instance, allowing objects to access it easily from anywhere in the codebase.
- **Single instance**: It ensures that a class has only one instance throughout the lifetime of the application, which can be useful for managing shared resources or controlling access to resources.
- **Lazy initialization**: Singleton instances can be lazily initialized, meaning they are created only when they are first requested. This can help improve performance by avoiding unnecessary initialization overhead.
- **Thread safety**: Singleton instances can be made thread-safe, ensuring that multiple threads can safely access and use the instance without causing race conditions or other synchronization issues.

### Cons:

- **Global state**: Singleton introduces a global state into the application, which can make it harder to test and reason about the code. Changes to the singleton instance can affect the behavior of other parts of the application, leading to unexpected side effects.

- **Hard to subclass**: Singleton classes are often designed to be final or have private constructors, making them difficult to subclass and extend. This can limit flexibility and hinder the ability to adapt to changing requirements.

- **Testing challenges**: Singleton classes can be difficult to unit test due to their global state. Mocking or stubbing the singleton instance may be necessary to isolate and test individual components.

- **Dependency injection issues**: Singleton can create tight coupling between classes, as they rely directly on the singleton instance rather than accepting it as a dependency. This can make it harder to replace or mock the singleton instance in certain scenarios.

- **Memory management**: Singleton instances persist throughout the lifetime of the application, potentially leading to memory leaks if not managed carefully, especially in long-running applications or environments with limited resources.
