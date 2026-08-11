# Anumati.ai — Database and Maven Setup

## Backend location

The Spring Boot Maven project is located in `anumati-backend`.

You can run the backend from either location:

```powershell
# From the repository root
mvn spring-boot:run

# Or from the backend module
cd anumati-backend
mvn spring-boot:run
```

The root command works because `.mvn/maven.config` points Maven to
`anumati-backend/pom.xml`.

## Maven validation

Run the test/compile validation from `anumati-backend`:

```powershell
mvn test
```

Current result: `BUILD SUCCESS`.

The test source had an invalid UTF-8 BOM at its beginning; it was removed so
Maven can compile the test sources.

## PostgreSQL (Neon) connection

The Spring Boot application uses PostgreSQL through Spring Data JPA.
Connection settings are in `anumati-backend/src/main/resources/application.properties`.

| Setting | Value |
| --- | --- |
| Host | `ep-silent-water-azsbbb2q.c-3.ap-southeast-1.aws.neon.tech` |
| Port | `5432` |
| Database | `neondb` |
| Username | `neondb_owner` |
| Password | `************` |
| JDBC URL | `jdbc:postgresql://ep-silent-water-azsbbb2q.c-3.ap-southeast-1.aws.neon.tech:5432/neondb?sslmode=require` |

The application runs on port `8081`.

## Database connectivity troubleshooting

The Neon endpoint is reachable on PostgreSQL port `5432`, but the local Windows
DNS resolver previously refused the database hostname. If Spring Boot reports
`UnknownHostException`, set the Wi-Fi adapter to public DNS and flush its cache:

```powershell - running command
mvn spring-boot:run
```

Use `Ctrl+C` in the running terminal to stop the server before starting it again.

## Security reminder
This document contains database credentials for local development. Do not commit
it to a public repository. Rotate the database password if it has been shared or
committed publicly.
