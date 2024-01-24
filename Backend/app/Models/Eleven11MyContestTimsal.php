<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eleven11MyContestTimsal extends Model
{
    use HasFactory;
    public $timestamps = false;

    public function contest()
    {
        return $this->belongsTo(Eleven11ContestTimsal::class, 'contest_id');
    }

    public function tournament()
    {
        return $this->belongsTo(Eleven11TournamentTimsal::class, 'tournament_id','tournmaent_id');
    }
}
