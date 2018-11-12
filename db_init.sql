CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [nvarchar](250) NOT NULL,
	[LastName] [nvarchar](250) NOT NULL,
	[Email] [nvarchar](250) NOT NULL,
	[Phone] [nvarchar](250) NOT NULL,
	[Token] [nvarchar](1024) NOT NULL,
	[RegistrationDate][datetime] NOT NULL,
	[RulesAccepted][bit] NOT NULL,
	[IsActive][bit] NOT NULL
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[MarkerCollection](
	[Id] [int] NOT NULL,
	[Name] [nvarchar](250) NOT NULL
 CONSTRAINT [PK_MarkerCollection] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [dbo].[MarkerCollection]([Id],[Name]) values
(1, 'food'),
(2, 'animal'),
(3, 'heroes')

CREATE TABLE [dbo].[Markers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Key] [nvarchar](250) NOT NULL,
	[Value] [nvarchar](250) NOT NULL,
	[CollectionId] [int] NOT NULL
 CONSTRAINT [PK_Markers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Markers]  WITH CHECK ADD  CONSTRAINT [FK_Markers_MarkerCollection] FOREIGN KEY([CollectionId])
REFERENCES [dbo].[MarkerCollection] ([Id])
GO

ALTER TABLE [dbo].[Markers] CHECK CONSTRAINT [FK_Markers_MarkerCollection]
GO

insert into [dbo].[Markers] ([Key],[Value],[CollectionId]) values
('deer', '1', 1),
('fox', '3', 1),
('shark', '4', 1),
('burger', '43', 2),
('egg', '19', 2),
('sushi', '28', 2),
('pikachu', '46', 3),
('bulbasaur', '54', 3),
('bb8', '35', 3)
go

CREATE TABLE [dbo].[UserMarkers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[MarkerId] [int] NOT NULL,
	[DateTime] [datetime] NOT NULL
 CONSTRAINT [PK_UserMarkers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[UserMarkers]  WITH CHECK ADD  CONSTRAINT [FK_UserMarkers_Users] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
GO

ALTER TABLE [dbo].[UserMarkers] CHECK CONSTRAINT [FK_UserMarkers_Users]
GO

ALTER TABLE [dbo].[UserMarkers] WITH CHECK ADD  CONSTRAINT [FK_UserMarkers_Markers] FOREIGN KEY([MarkerId])
REFERENCES [dbo].[Markers] ([Id])
GO

ALTER TABLE [dbo].[UserMarkers] CHECK CONSTRAINT [FK_UserMarkers_Markers]
GO

ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [FirstName_LastName_Email_Phone] UNIQUE NONCLUSTERED 
(
	[FirstName] ASC,
	[LastName] ASC,
	[Email] ASC,
	[Phone] ASC
)
GO

ALTER TABLE [dbo].[UserMarkers] ADD  CONSTRAINT [UserId_MarkerId] UNIQUE NONCLUSTERED 
(
	[UserId] ASC,
	[MarkerId] ASC
)
GO