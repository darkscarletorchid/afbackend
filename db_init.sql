CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](250) NOT NULL,
	[Email] [nvarchar](250) NULL,
	[Token] [nvarchar](1024) NOT NULL,
	[RegistrationDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

CREATE TABLE [dbo].[Markers](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Key] [nvarchar](250) NOT NULL,
	[Value] [nvarchar](250) NOT NULL
 CONSTRAINT [PK_Markers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

insert into [dbo].[Markers] ([Key],[Value]) values
('letter-m', 'M'),
('letter-a1', 'A'),
('letter-t', 'T'),
('letter-e1', 'E'),
('letter-r', 'R'),
('letter-i1', 'I'),
('letter-a2', 'A'),
('letter-l', 'L'),
('letter-i2', 'I'),
('letter-s', 'S'),
('letter-e2', 'E')
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

ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [Name_Email] UNIQUE NONCLUSTERED 
(
	[Name] ASC,
	[Email] ASC
)
GO

ALTER TABLE [dbo].[UserMarkers] ADD  CONSTRAINT [UserId_MarkerId] UNIQUE NONCLUSTERED 
(
	[UserId] ASC,
	[MarkerId] ASC
)
GO