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

CREATE TABLE [dbo].[Markers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Key] [nvarchar](250) NOT NULL,
	[Value] [nvarchar](250) NOT NULL,
	[Coins] [int] NOT NULL
 CONSTRAINT [PK_Markers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [dbo].[Markers] ([Key],[Value],[Coins]) values
('deer', '1', 1),
('fox', '3', 1),
('shark', '4', 1),
('burger', '43', 1),
('egg', '19', 1),
('sushi', '28', 1),
('pikachu', '46', 1),
('bulbasaur', '54', 1),
('bb8', '35', 1)
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