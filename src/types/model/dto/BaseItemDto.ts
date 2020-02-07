import { Guid } from "../../Guid";
import { Optional } from "../../types";
import { ImageOrientation } from "../drawing/ImageOrientation";
import { ChapterInfo } from "../entities/ChapterInfo";
import { ImageType } from "../entities/ImageType";
import { IsoType } from "../entities/IsoType";
import { LocationType } from "../entities/LocationType";
import { MediaStream } from "../entities/MediaStream";
import { MediaUrl } from "../entities/MediaUrl";
import { MetadataFields } from "../entities/MetadataFields";
import { Video3DFormat } from "../entities/Video3DFormat";
import { VideoType } from "../entities/VideoType";
import { PlayAccess } from "../library/PlayAccess";
import { ChannelType } from "../livetv/ChannelType";
import { ProgramAudio } from "../livetv/ProgramAudio";
import { ExternalUrl } from "../providers/ExternalUrl";
import { DayOfWeek } from "../tasks/DayOfWeek";
import { BaseItemPerson } from "./BaseItemPerson";
import { MediaSourceInfo } from "./MediaSourceInfo";
import { NameGuidPair } from "./NameGuidPair";
import { UserItemDataDto } from "./UserItemDataDto";

/**
 * The horrendous BaseItemDto class.
 * Every string and array is assumed to be nullable (or undefined) until we know otherwise.
 *
 * @export
 * @interface BaseItemDto
 */
export interface BaseItemDto {
    Name?: Optional<string>;
    OriginalTitle?: Optional<string>;
    ServerId?: Optional<string>;
    Id?: Guid;
    Etag?: Optional<string>;
    SourceType?: Optional<string>;
    PlaylistItemId?: Optional<string>;
    DateCreated?: Optional<Date>;
    DateLastMediaAdded?: Optional<Date>;
    ExtraType?: Optional<string>;
    AirsBeforeSeasonNumber?: Optional<number>;
    AirsAfterSeasonNumber?: Optional<number>;
    AirsBeforeEpisodeNumber?: Optional<number>;
    CanDelete?: Optional<boolean>;
    CanDownload?: Optional<boolean>;
    HasSubtitles?: Optional<boolean>;
    PreferredMetadataLanguage?: Optional<string>;
    PreferredMetadataCountryCode?: Optional<string>;
    SupportsSync?: Optional<boolean>;
    Container?: Optional<string>;
    SortName?: Optional<string>;
    ForcedSortName?: Optional<string>;
    Video3DFormat?: Optional<Video3DFormat>;
    PremiereDate?: Optional<Date>;
    ExternalUrls?: Optional<ExternalUrl[]>;
    MediaSources?: MediaSourceInfo[];
    CriticRating?: Optional<number>;
    ProductionLocations?: Optional<string[]>;
    Path?: Optional<string>;
    EnableMediaSourceDisplay?: Optional<boolean>;
    OfficialRating?: Optional<string>;
    CustomRating?: Optional<string>;
    ChannelId?: Guid;
    ChannelName?: Optional<string>;
    Overview?: Optional<string>;
    Taglines?: Optional<string[]>;
    Genres?: Optional<string[]>;
    CommunityRating?: Optional<number>;
    CumulativeRunTimeTicks?: Optional<number>;
    RunTimeTicks?: Optional<number>;
    PlayAccess?: Optional<PlayAccess>;
    AspectRatio?: Optional<string>;
    ProductionYear?: Optional<number>;
    IsPlaceHolder?: Optional<boolean>;
    Number?: Optional<string>;
    ChannelNumber?: Optional<string>;
    IndexNumber?: Optional<number>;
    IndexNumberEnd?: Optional<number>;
    ParentIndexNumber?: Optional<number>;
    RemoteTrailers?: Optional<MediaUrl[]>;
    ProviderIds?: Optional<Record<string, string>>;
    IsHD?: Optional<boolean>;
    IsFolder?: Optional<boolean>;
    ParentId?: Guid;
    Type?: Optional<string>;
    People?: Optional<BaseItemPerson[]>;
    Studios?: Optional<NameGuidPair[]>;
    GenreItems?: Optional<NameGuidPair[]>;
    ParentLogoItemId?: Optional<string>;
    ParentBackdropItemId?: Optional<string>;
    ParentBackdropImageTags?: Optional<string[]>;
    LocalTrailerCount?: Optional<number>;
    UserData?: Optional<UserItemDataDto>;
    RecursiveItemCount?: Optional<number>;
    ChildCount?: Optional<number>;
    SeriesName?: Optional<string>;
    SeriesId?: Guid;
    SeasonId?: Guid;
    SpecialFeatureCount?: Optional<number>;
    DisplayPreferencesId?: Optional<string>;
    Status?: Optional<string>;
    AirTime?: Optional<string>;
    AirDays?: Optional<DayOfWeek[]>;
    Tags?: Optional<string[]>;
    PrimaryImageAspectRatio?: Optional<number>;
    Artists?: Optional<string[]>;
    ArtistItems?: Optional<NameGuidPair[]>;
    Album?: Optional<string>;
    CollectionType?: Optional<string>;
    DisplayOrder?: Optional<string>;
    AlbumId?: Guid;
    AlbumPrimaryImageTag?: Optional<string>;
    SeriesPrimaryImageTag?: Optional<string>;
    AlbumArtist?: Optional<string>;
    AlbumArtists?: Optional<NameGuidPair[]>;
    SeasonName?: Optional<string>;
    MediaStreams?: Optional<MediaStream[]>;
    VideoType?: Optional<VideoType>;
    PartCount?: Optional<number>;
    MediaSourceCount?: Optional<number>;
    ImageTags?: Optional<Record<ImageType, string>>;
    BackdropImageTags?: Optional<string[]>;
    ScreenshotImageTags?: Optional<string[]>;
    ParentLogoImageTag?: Optional<string>;
    ParentArtItemId?: Optional<string>;
    ParentArtImageTag?: Optional<string>;
    SeriesThumbImageTag?: Optional<string>;
    SeriesStudio?: Optional<string>;
    ParentThumbItemId?: Optional<string>;
    ParentThumbImageTag?: Optional<string>;
    ParentPrimaryImageItemId?: Optional<string>;
    ParentPrimaryImageTag?: Optional<string>;
    Chapters?: Optional<ChapterInfo[]>;
    LocationType?: Optional<LocationType>;
    IsoType?: Optional<IsoType>;
    MediaType?: Optional<string>;
    EndDate?: Optional<Date>;
    LockedFields?: Optional<MetadataFields[]>;
    TrailerCount?: Optional<number>;
    MovieCount?: Optional<number>;
    SeriesCount?: Optional<number>;
    ProgramCount?: Optional<number>;
    EpisodeCount?: Optional<number>;
    SongCount?: Optional<number>;
    AlbumCount?: Optional<number>;
    ArtistCount?: Optional<number>;
    MusicVideoCount?: Optional<number>;
    LockData?: Optional<boolean>;
    Width?: Optional<number>;
    Height?: Optional<number>;
    CameraMake?: Optional<string>;
    CameraModel?: Optional<string>;
    Software?: Optional<string>;
    ExposureTime?: Optional<number>;
    FocalLength?: Optional<number>;
    ImageOrientation?: Optional<ImageOrientation>;
    Aperture?: Optional<number>;
    ShutterSpeed?: Optional<number>;
    Latitude?: Optional<number>;
    Longitude?: Optional<number>;
    Altitude?: Optional<number>;
    IsoSpeedRating?: Optional<number>;
    SeriesTimerId?: Optional<string>;
    ProgramId?: Optional<string>;
    ChannelPrimaryImageTag?: Optional<string>;
    StartDate?: Optional<Date>;
    CompletionPercentage?: Optional<number>;
    IsRepeat?: Optional<boolean>;
    EpisodeTitle?: Optional<string>;
    ChannelType?: Optional<ChannelType>;
    Audio?: Optional<ProgramAudio>;
    IsMovie?: Optional<boolean>;
    IsSports?: Optional<boolean>;
    IsSeries?: Optional<boolean>;
    IsLive?: Optional<boolean>;
    IsNews?: Optional<boolean>;
    IsKids?: Optional<boolean>;
    IsPremiere?: Optional<boolean>;
    TimerId?: Optional<string>;
    CurrentProgram?: Optional<BaseItemDto>;
    PrimaryImageItemId?: Optional<string>; // Doesn't exist in backend, but used in ApiClientCore.adjustGuidProperties
}