<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eleven11ContestTimsal extends Model
{
    use HasFactory;

    // public function tournament()
    // {
    //     return $this->belongsTo(Eleven11TournamentTimsal::class, 'tournament_id');
    // }

    public function myContests()
    {
        return $this->hasOne(Eleven11MyContestTimsal::class, 'contest_id');
    }
}
