interface MeetingIdLayoutProps {
  children: React.ReactNode;
}

const MeetingIdLayout = ({ children }: MeetingIdLayoutProps) => {
  return <div className="h-screen bg-black">{children}</div>;
};

export default MeetingIdLayout;
