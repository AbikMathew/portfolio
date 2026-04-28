import { site, copy } from '@/data';
import { getAssetPath } from '@/lib/asset';
import Button from '@/components/ui/Button';

export default function ResumeButton() {
  return (
    <Button
      href={getAssetPath(site.resumePath)}
      arrow="↓"
      download={site.resumeFilename}
    >
      {copy.buttons.downloadResume}
    </Button>
  );
}
