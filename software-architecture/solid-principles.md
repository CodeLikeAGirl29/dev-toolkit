# Key principles of writing SOLID code

* **S**ingle Responsibility Principle
> I prefer to think of ‘responsibility’ here as ‘purpose’ or ‘job to do’, but it’s called SRP. This is basically just another statement about modularity. Find the logical units and encapsulate them in a class. Don’t take classes that do some of this and some of that. You’ll get greater re-use of the component since the component wasn’t bundled with several other responsibilities the upstream consumer doesn’t want or need;

> An alternative conceptualization of the SRP: A class should have a single reason to change.

> This principle refers to the impact of a change of requirements on the code. For example, a class should either talk to the database, or format output for the UI, not both. Classes that deal with the database won’t need to be updated if the UI changes, and vice versa. When requirements change, modification is kept to just those spots directly affected, and these changes don’t have unanticipated consequences elsewhere in classes that whose responsibilities have leaked over into ours.

* **O**pen/Closed Principle

> “Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.”

> Construct your classes so that requirements changes can be managed by adding code, not by modifying existing code. Once you have written code that works, you should ideally never touch it again, because if you don’t touch it, you can’t break it. If you’re writing nice modular code, you probably have objects being used by other objects all over the place (code reuse = good). If you now break that class, you break everybody who is using it (==bad).

* **L**iskov substitution principle

> Subclasses should be substitutable for their base class. All members of an inheritance hierarchy should fulfil the same behavioural contract. If they don’t then your “is-a” abstraction is probably wrong.

> The LSP helps us to avoid misusing inheritance and consequently running into the problems that result when this occurs. A user of a base class should continue to function properly if any derivative of the base class is passed to it. Failure to follow the LSP almost always leads to problems with the OCP, as you wiggle around coding in special cases to your class family.

* **I**nterface Segregation Principle

> The dependency of one class to another one should depend on the smallest possible interface. Clients should not be forced to depend on methods they do not use. This one is very closely related to the SRP: don’t stuff everything into one big garbage multipurpose class. Changes to code are isolated to those classes that are logically affected.

> In this case, all the classes that inherit this interface are forced to write methods for sending email and SMS. If some clients are interested only in emails, the issue arises.

* **D**ependency Inversion Principle

> Program to the most abstract class possible. High-level modules should not depend on (concrete) low-level modules.